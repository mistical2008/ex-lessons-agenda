import { Spin, Layout, Form, Select, Typography, Input } from 'antd'

import { useTeacher, useTeachersList } from 'shared/api'
const { Header, Content } = Layout

function HomePage() {
    const teacherId = 'asUFN_eS2fNYWtwgQKRLg'
    const { isLoading, data } = useTeachersList()
    const { isLoading: isTeacherLoading, data: teacher } = useTeacher(teacherId)
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
        },
    }

    if (isLoading || isTeacherLoading) {
        return <Spin />
    }

    return (
        <Layout>
            <Header>
                <Typography.Title style={{ color: '#fff' }} level={1}>
                    Home Page
                </Typography.Title>
            </Header>
            <Content
                css={{
                    maxWidth: '1280px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <Form {...formItemLayout}>
                    <Form.Item label="ФИО">
                        <Input placeholder="Search" />
                    </Form.Item>
                    <Form.Item label="Выбор предмета и учителя">
                        <Form.Item
                            style={{
                                display: 'inline-block',
                                width: 'calc(50% - 12px)',
                            }}
                        >
                            <Select placeholder="I'm Select" allowClear>
                                {/* @ts-ignore */}
                                <Option value="1">Option 1</Option>
                                {/* @ts-ignore */}
                                <Option value="2">Option 2</Option>
                                {/* @ts-ignore */}
                                <Option value="3">Option 3</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            style={{
                                display: 'inline-block',
                                width: 'calc(50% - 12px)',
                            }}
                        >
                            <Select placeholder="I'm Select" allowClear>
                                {/* @ts-ignore */}
                                <Option value="1">Option 1</Option>
                                {/* @ts-ignore */}
                                <Option value="2">Option 2</Option>
                                {/* @ts-ignore */}
                                <Option value="3">Option 3</Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                </Form>
                <div style={{ textAlign: 'left' }}>
                    <code>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </code>
                </div>
                <Typography.Title level={2}>
                    Teacher by id: '{teacherId}'
                </Typography.Title>
                <div style={{ textAlign: 'left' }}>
                    <code>
                        <pre>{JSON.stringify(teacher, null, 2)}</pre>
                    </code>
                </div>
            </Content>
        </Layout>
    )
}

export default HomePage
