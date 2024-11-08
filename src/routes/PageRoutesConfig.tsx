import Advantages from '../components/screens/advantages/Advantages'
import ESimTechnology from '../components/screens/esim-technology/ESimTechnology'
import NewSubscriber from '../components/screens/new-subscriber/NewSubscriber'
import Plans from '../components/screens/plans/Plans'
import PromoPlan from '../components/screens/promo-plan/PromoPlan'
import SpecialOffers from '../components/screens/special-offers/SpecialOffers'

interface RouteLink {
	label: string
	path: string
	element: JSX.Element
}

export class PageRoutesConfig {
	readonly home: string = '/'
	readonly advantages: string = '/advantages'
	readonly plans: string = '/plans'
	readonly specialOffers: string = '/special-offers'
	readonly promoPlan: string = '/promo-plan'
	readonly eSimTechnology: string = '/esim-technology'
	readonly newSubscriber: string = '/new-subscriber'

	getLinks(): RouteLink[] {
		return [
			{
				label: 'Преимущества Tele2',
				path: this.advantages,
				element: <Advantages />,
			},
			{ label: 'Тарифы', path: this.plans, element: <Plans /> },
			{
				label: 'Акции и спецпредложения',
				path: this.specialOffers,
				element: <SpecialOffers />,
			},
			{
				label: 'Промотариф Tele2',
				path: this.promoPlan,
				element: <PromoPlan />,
			},
			{
				label: 'Технология eSIM',
				path: this.eSimTechnology,
				element: <ESimTechnology />,
			},
			{
				label: 'Подключение нового абонента',
				path: this.newSubscriber,
				element: <NewSubscriber />,
			},
		]
	}
}

export const routeConfig = new PageRoutesConfig()
