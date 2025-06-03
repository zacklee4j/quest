import React, { FC, useEffect } from 'react'
import { Form, Select, Checkbox, Input } from 'antd'
import { QuestionTitlePropsType } from './Interface'

const PropsComponent: FC<QuestionTitlePropsType> = (
  props: QuestionTitlePropsType
) => {
  const { text, level, isCenter, onChange } = props
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({ text, level, isCenter })
  }, [text, level, isCenter])
  function handleValueCHange() {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }
  return (
    <Form form={form} layout="vertical" onValuesChange={handleValueCHange}>
      <Form.Item
        label="TitleText"
        name="text"
        rules={[{ required: true, message: 'Please input title' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="TitleLevel" name="level">
        <Select
          options={[
            { value: 1, text: '1' },
            { value: 2, text: '2' },
            { value: 3, text: '3' },
          ]}
        ></Select>
      </Form.Item>
      <Form.Item
        label="TitlePosition"
        name="isCenter"
        valuePropName="DisplayCenter"
      >
        <Checkbox></Checkbox>
      </Form.Item>
    </Form>
  )
}

export default PropsComponent
