import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/screens/home/Home.tsx'
import NotFound from './components/screens/not-found/NotFound.tsx'
import { routeConfig } from './routes/PageRoutesConfig.tsx'

function App() {
	return (
		<Layout>
			<Routes>
				{routeConfig.getLinks().map(e => (
					<Route path={e.path} element={e.element} key={e.path} />
				))}
				<Route path={routeConfig.home} element={<Home />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Layout>
	)
}

export default App
