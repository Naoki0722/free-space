import { VFC } from 'react'
import { Datagrid, EditButton, EmailField, List, TextField, UrlField } from 'react-admin'

export const Users: VFC = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <UrlField source="website" />
      <TextField source="company.name" />
      <EditButton />
    </Datagrid>
  </List>
)
