import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Alert, Button, Card, Col, Form, Input, InputNumber, Radio, Row, Space } from 'antd';

export function CreateTokenSection() {
  const [splTokenForm] = Form.useForm();
  const { publicKey, connected, sendTransaction, signTransaction } = useWallet();

  console.log(publicKey);

  return (
    <div>
      <Row gutter={12}>
        <Col span={12}>
          <Card
            title="Create SPL Token"
            extra={
              <div>
                <WalletMultiButton />
              </div>
            }
          >
            <Alert
              type="info"
              className="mb-4"
              message={
                connected ? (
                  <div>
                    Connected to wallet: <strong>{publicKey!.toBase58()}</strong>
                  </div>
                ) : (
                  <span>Not connected to a wallet</span>
                )
              }
            />

            <Form
              form={splTokenForm}
              layout="vertical"
              initialValues={{
                tokenType: 'spl-token',
                decimals: 9,
                initialSupply: 1000000000,
              }}
            >
              <Row gutter={12}>
                <Col span={24}>
                  <Form.Item name="tokenType" label="Token Type">
                    <Radio.Group>
                      <Radio value="spl-token">SPL TOKEN</Radio>
                      <Radio value="spl-token-2022">SPL TOKEN 2022</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Token Name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Token Symbol">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="decimals" label="Decimals">
                    <InputNumber />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="initialSupply" label="Initial Supply">
                    <InputNumber className="w-full" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Mint Authority">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Freeze Authority">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24} className="text-center">
                  <Space>
                    <Button>Connect Wallet</Button>
                    <Button type="primary">Create Token</Button>
                  </Space>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
