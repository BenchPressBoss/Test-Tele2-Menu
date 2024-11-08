import Advantages from '@screens/advantages/Advantages'
import ESimTechnology from '@screens/esim-technology/ESimTechnology'
import NewSubscriber from '@screens/new-subscriber/NewSubscriber'
import Plans from '@screens/plans/Plans'
import PromoPlan from '@screens/promo-plan/PromoPlan'
import SpecialOffers from '@screens/special-offers/SpecialOffers'

interface RouteLink {
	label: string
	path: string
	element: JSX.Element
}

const BASE_PATH = '/Test-Tele2-menu'

export class PageRoutesConfig {
	readonly home = `${BASE_PATH}`
	readonly advantages = `${BASE_PATH}/advantages`
	readonly plans = `${BASE_PATH}/plans`
	readonly specialOffers = `${BASE_PATH}/special-offers`
	readonly promoPlan = `${BASE_PATH}/promo-plan`
	readonly eSimTechnology = `${BASE_PATH}/esim-technology`
	readonly newSubscriber = `${BASE_PATH}/new-subscriber`

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
