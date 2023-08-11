import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  RaRecord,
  ReferenceField,
  ReferenceInput,
  SimpleForm,
  TextField,
  TextInput,
  useRecordContext,
} from 'react-admin'

const PostTitle = () => {
  const record: RaRecord = useRecordContext()
  return <span>Post {record ? `${record.id}` : ''}</span>
}

export const PostList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
)

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
)

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
)
