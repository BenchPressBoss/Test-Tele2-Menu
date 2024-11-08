import Layout from '@layout/Layout'
import { routeConfig } from '@routes/PageRoutesConfig.tsx'
import Home from '@screens/home/Home.tsx'
import NotFound from '@screens/not-found/NotFound.tsx'
import { Route, Routes } from 'react-router-dom'

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
