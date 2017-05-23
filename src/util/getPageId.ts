import configManagerInstance from '../config/configManagerInstance';
import { PropertyNames } from '../data/enum/configNames';

export default function getPageId(route):string {
	const pageId = [route.params.page];

	if (!configManagerInstance.getProperty(PropertyNames.IGNORE_SUB).includes(route.params.page)) {
		if (route.params.sub) pageId.push(route.params.sub);
		if (route.params.sub2) pageId.push(route.params.sub2);
	}

	return pageId.join('/');
}
