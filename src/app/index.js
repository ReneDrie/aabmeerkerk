import SiteHeader from 'component/site-header/site-header';
import SiteFooter from 'component/site-footer/site-footer';
import MainNavigation from 'component/main-navigation/main-navigation';
import store from 'src/app/store';
import router from 'src/app/router';
import template from './index.html';

export default {
	template,
	store,
	router,
	components: {
		SiteHeader,
		SiteFooter,
		MainNavigation
	},
}
