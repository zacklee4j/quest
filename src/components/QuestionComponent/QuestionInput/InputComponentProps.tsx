import React, { FC, useEffect } from 'react'
import { QuestionInputPropsType } from './index'
import { Form, Input } from 'antd'

const PropsComponent: FC<QuestionInputPropsType> = (
  props: QuestionInputPropsType
) => {
  const { title, placeholder, onChange, disabled } = props
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({ title, placeholder })
  }, [title, placeholder])
  function handleValueCHange() {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ title, placeholder }}
      onValuesChange={handleValueCHange}
      disabled={disabled}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please input title!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Placeholder" name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  )
}

export default PropsComponent
