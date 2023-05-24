import jsonServerProvider from 'ra-data-json-server'
import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin'
import { authProvider } from '../authProvider'
import { PostCreate, PostEdit, PostList } from './posts'
import { Users } from './users'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={Users} edit={EditGuesser} show={ShowGuesser} recordRepresentation="name" />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} show={ShowGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
)

export default App
