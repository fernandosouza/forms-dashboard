'use strict';

import templates from './FormsDashboard.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class FormsDashboard extends Component {
}

FormsDashboard.STATE = {
	data: {
		value: {
			'fp5': 3,
			'fp4': 2,
			'fp3': 4,
			'fp2': 8,
			'fp1': 10
		}
	}
}

Soy.register(FormsDashboard, templates);

export default FormsDashboard;
