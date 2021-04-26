const pageExists = require('./plop_templates/utils/pageExists')

module.exports = plop => {
	// Page generator
	plop.setGenerator('page', {
		description: 'Generate new page',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What should it be called?',
				validate: value => {
					if (/.+/.test(value)) {
						return pageExists(value) ? 'A page with this name already exists' : true
					}

					return 'The name is required'
				}
			},
			{
				type: 'confirm',
				name: 'container',
				message: 'Is this a container component?',
				default: true
			},
			{
				type: 'confirm',
				name: 'useState',
				default: false,
				message: 'Do you want to use state in this page?'
			}
		],
		actions: () => {
			const actions = [
				{
					type: 'add',
					path: './pages/{{dashCase name}}.tsx',
					templateFile: './plop_templates/Page.tsx.hbs',
					abortOnFail: true
				}
			]
			return actions
		}
	})

	// Component generator
	// TODO: add prompts to specify where to create the component (e.g. ui/forms/layouts/modals)
	plop.setGenerator('component', {
		description: 'Generate UI component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What should it be called?',
				validate: value => {
					if (/.+/.test(value)) {
						return pageExists(value) ? 'A component with this name already exists' : true
					}

					return 'The name is required'
				}
			},
			{
				type: 'confirm',
				name: 'container',
				message: 'Is this a container component?',
				default: true
			},
			{
				type: 'confirm',
				name: 'useState',
				default: false,
				message: 'Do you want to use state in this page?'
			}
		],
		actions: () => {
			const actions = [
				{
					type: 'add',
					path: './components/ui/{{properCase name}}/index.tsx',
					templateFile: './plop_templates/Component.tsx.hbs',
					abortOnFail: true
				},
				{
					type: 'add',
					path: './components/ui/{{properCase name}}/index.module.scss',
					templateFile: './plop_templates/ComponentStyles.module.scss.hbs',
					abortOnFail: true
				}
			]
			return actions
		}
	})

	// Redux slice generator
	// TODO: add modify action to add reducer to rootReducer (in ~store/index.ts)
	plop.setGenerator('slice', {
		description: 'Generate UI component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What should it be called?',
				validate: value => {
					if (/.+/.test(value)) {
						return pageExists(value) ? 'A component with this name already exists' : true
					}

					return 'The name is required'
				}
			},
			{
				type: 'confirm',
				name: 'container',
				message: 'Is this a container component?',
				default: true
			},
			{
				type: 'confirm',
				name: 'useState',
				default: false,
				message: 'Do you want to use state in this page?'
			}
		],
		actions: () => {
			const actions = [
				{
					type: 'add',
					path: './components/ui/{{properCase name}}/index.tsx',
					templateFile: './plop_templates/Component.tsx.hbs',
					abortOnFail: true
				},
				{
					type: 'add',
					path: './components/ui/{{properCase name}}/index.module.scss',
					templateFile: './plop_templates/ComponentStyles.module.scss.hbs',
					abortOnFail: true
				}
			]
			return actions
		}
	})
}
