# LeaseOTB ui-components

Opinionated Storybook using the following stack:

- Create React App w/ Typescript
- Storybook
- Storybook Addon Actions
- MDX
- Material UI
- Styled Components

This repository uses automatic semantic release using Github Actions.  All commits and PRs to master are packaged into public NPM package located here (TBD)

#
## Development

Download the project files, then run

`yarn` or `npm install`

to install all the necessary dependencies.

You can then start Storybook locally in watch mode by running

`yarn storybook` or `npm run storybook`

#
## Production Usage

Import the NPM package

`import {Button} from '@leaseOTB/ui-components'`

then use the component:

`<Button variant='primary'>Hello</Button>`

#
### &copy; Lease on the Block 