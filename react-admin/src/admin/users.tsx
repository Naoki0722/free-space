import { VFC } from 'react'
import { Datagrid, EmailField, List, TextField, UrlField } from 'react-admin'

export const Users: VFC = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <UrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
)
