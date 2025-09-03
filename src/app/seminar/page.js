
'use client';
import { Form, Input, Select, Button, Divider, Typography, Row, Col, Flex } from 'antd';
import './page.less';
import { LeftOutlined, RightOutlined ,MenuOutlined} from '@ant-design/icons';
import Header from './../components/Header/page';


export default function Seminar() {
  const { Text, Title } = Typography;
  const RequiredLabel = ({ children }) => (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      {children}
      <span style={{ backgroundColor: '#ff0000', color: '#fff', padding: '2px 6px', marginLeft: '5px', borderRadius: '3px' }}>必須</span>
    </span>
  );
  const content = (
    <div>
      <img width={420} src="/seminar/seminarCarousel.png" alt="セミナー画像" className='seminarImage' />
      <div className='textOverlay'>
        <Title level={5} style={{ marginTop: '0', marginBottom: '8px', width: "190px" }}>
          バングラデシュIT人材採用支援セミナー
        </Title>
        <img src="/seminar/seminarIcon.png" alt="セミナー画像" className='seminarIcon' />
        <Title  level={5} >令和7年4月17日(木)</Title>
      </div>
      {/* <Text strong>バングラデシュIT人材採用支援セミナー</Text>
      <Text type="secondary">令和7年4月17日(木)</Text> */}
      <Title level={4} style={{ marginTop: '16px', width: "320px" }}>
        バングラデシュIT人材 × 日本企業：DX時代のグローバル戦略セミナー
      </Title>
      <Text style={{ marginTop: '8px', display: 'block', textAlign: 'left', width: "410px" }}>
        本セミナーは、外国人ITエンジニアの活用やオフショア開発の推進、そしてDX・AI・クラウド技術の導入を検討している企業様を対象に、バングラデシュ人材の活用可能性について具体的な情報と成功事例をご紹介する場です。
      </Text>
    </div>
  );


  return (
    <>
     <Header currentIndex={'Seminar'} />
      <div className="seminar_page">
        <Row>
          <Col span={24} >
            <Title className="seminar_page_title" style={{ }}>
              <div>バングラデシュ人材セミナー（東京開催）– ノー</div>
              ベル平和賞受賞者 ムハマド・ユヌス教授を特別講演者に迎えて
            </Title>
          </Col>
          {/* 左侧内容 */}
          <Col span={14} >
            <div className='leftContent1'>
              {/* 教授图片和简介 */}
              <>
                <div className="professorImageContainer">
                  <img src="/seminar/preson.png" alt="Professor Yunus" className='professorImage' />
                  <div className="professorInfo">
                    <Title level={4}>ムハマド・ユヌス教授閣下</Title>
                    <Text style={{display: 'block',marginTop: '8px'}}>バングラデシュ人民共和国政府 チーフアドバイザー</Text>
                    <Text style={{display: 'block',marginTop: '8px'}}>2006年 ノーベル平和賞受賞者</Text>
                  </div>
                </div>
                <Button size="large" shape="round" className='orangeButton'>サービス一覧をみる →</Button>

                <Title level={3}>概要</Title>
                <Divider size="large" className='divider' />
                <Text style={{ marginTop: '24px',lineHeight: "35px" }}>2025年5月29日（金）、バングラデシュ人民共和国大使館主催による「バングラデシュ人
                  材セミナー」が、**全国都市会館（東京都千代田区平河町）**にて開催されます。 本セミナーでは、2006年ノーベル平和賞受賞者 ムハマド・ユヌス教授を特別講演者として
                  お迎えし、日本とバングラデシュの間における人材分野での協力強化について講演をいただ
                  きます。
                  セミナーでは、バングラデシュの若くて優秀な労働力の可能性、日本における人材不足への対応、
                  三国間労働協力の展望など、戦略的な視点から議論が行われます。政府関係者、企業担当者、
                  人材関連の専門家の皆様のご参加をお待ちしております。</Text>
              </>
              <>
                <Title level={3}>登壇者</Title>
                <Divider size="large" className='divider' />
                <Row gutter={8} justify="start" >
                  <Col span={4}>
                    <img src="/seminar/professor-yunus.png" alt="ムハマド・ユヌス教授" className='speakerImage' />
                  </Col>
                  <Col span={12} className='setDown'>

                    <Text strong>ムハマド・ユヌス教授閣下</Text><br />
                    <Text >バングラデシュ 暫定政権首席顧問</Text><br />
                    <Text >2006年 ノーベル平和賞受賞者</Text><br />

                  </Col>
                </Row>
                <Text style={{ margin: '24px 0', display: 'block',lineHeight: "35px" }}>
                  1940年バングラデシュ・チッタゴン生まれ。ダッカ大学で経済学修士号を取得後、フルブライト奨学金で渡米し、1969年にヴァンダービルト大学にて経済学博士号を取得。帰国後はチッタゴン大学経済学部長を務め、1974年の大飢饉を機に貧困撲滅に取り組む。
                  1983年にグラミン銀行を創設し、マイクロクレジットによる経済的自立支援を実践。
                  この取り組みは国際的評価を受け、2006年にノーベル平和賞を受賞。2024年8月より暫定政権の首席顧問として国家再建に尽力している。
                </Text>
                <Button size="large" shape="round" className='orangeButton'>
                  サービス一覧をみる →
                </Button>
              </>
            </div>
          </Col>
          {/* 右侧表单 */}
          <Col span={10}>
            <div className='rightForm'>
              <h1>お申し込みフォーム</h1>
              <Form name="seminarForm" layout="vertical" >
                <Form.Item label={<RequiredLabel>お名前（漢字）</RequiredLabel>} name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                  <Input placeholder="山田 太郎" />
                </Form.Item>
                <Form.Item label={<RequiredLabel>会社名</RequiredLabel>} name="company" rules={[{ required: true, message: 'Please input your company!' }]}>
                  <Input placeholder="キャリアリンクファクトリー株式会社" />
                </Form.Item>
                <Form.Item label={<RequiredLabel>電話番号</RequiredLabel>} name="phone" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                  <Input placeholder="09012345678" />
                </Form.Item>
                <Form.Item label={<RequiredLabel>住所（都道府県）</RequiredLabel>} name="address" rules={[{ required: true, message: 'Please select your address!' }]}>
                  <Select placeholder="—以下から選択してください-">
                    <Select.Option value="tokyo">東京都</Select.Option>
                    <Select.Option value="osaka">大阪府</Select.Option>
                    {/* 更多选项... */}
                  </Select>
                </Form.Item>
                <Form.Item label={<RequiredLabel>メールアドレス</RequiredLabel>} name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                  <Input placeholder="info@jbcc.co.jp" />
                </Form.Item>
                <Form.Item >
                  <Title style={{ margin: 0, textAlign: 'left' }} level={5}>個人情報の取り扱いについては<a href="#">こちら</a>をご覧ください
                    <br />
                    <input type="checkbox" /> 個人情報の取り扱いについて同意する</Title>
                </Form.Item>
                <Form.Item>
                  <Button size="large" shape="round" className='orangeButton'>
                    送信する →
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col span={24}>
            <Title level={2} style={{ color: '#EE6629', textAlign: 'center',fontWeight: 'bold' }}>アーカイブ</Title>
            <Text style={{ display: 'block', textAlign: 'center', marginBottom: '24px', fontSize:"20px" }}>過去のオンラインセミナーの様子を配信しています。</Text>
            <Row gutter={[16, 16]} justify="center" className="Carousel">
              <Col span={23}> 
              <Flex justify='flex-end' align='flex-start'>
               <Button className="arrowButton " shape="circle" icon={<LeftOutlined />} />
                <Button className="arrowButton " shape="circle" icon={<RightOutlined />} />
                </Flex>
              </Col>
              {
                [1, 2, 3].map((item, index) => (
                  <Col span={8} key={index}>
                    <div className="CarouselContent">{content}</div>
                  </Col>
                ))
              }
              <Col span={24}>
                <Button size="large" shape="round" className='orangeButton'>
                  サービス一覧をみる →
                </Button>
              </Col>
            </Row>
            {/* </Carousel> */}



          </Col>
        </Row>

      </div>
    </>
  );
}