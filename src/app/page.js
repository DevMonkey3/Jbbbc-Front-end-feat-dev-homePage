'use client'; // 👈 添加这一行
import HomePage from "./home/home";
import { Menu, Image, Card, Space, Row, Col, Input, Typography, List, Carousel, Button } from "antd";
import { useState ,useEffect} from "react";
import './page.less';
import Header from './components/Header/page';
import { LeftOutlined, RightOutlined ,MenuOutlined} from '@ant-design/icons';
// import Seminar from "./seminar/page";
export default function Home() {
  const { Text, Title } = Typography;
  const { Search } = Input;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentStep, setCurrentStep] = useState(3);
      const [phase, setPhase] = useState(0); // 'show', 'fade-to-white', 'next'

  // 合并所有轮播内容：6个卡片 + 2张图片
   const [content1, setContent1] = useState([
   {
      src: '/home/imagePersona.png',
      text: 'ロキ\n20歳\n建設業\n技能実習生\n横浜',
      color: '#fff'
    },
    {
       src: '/home/imagePersonb.png',
      text: 'ロキ\n20歳\n建設業\n技能実習生\n横浜',
      color: '#fff'
    },
    {
       src: '/home/imagePersonc.png',
      text: 'ロキ\n20歳\n建設業\n技能実習生\n横浜',
      color: '#000'
    },
    {
      src: '/home/imagePersond.png',
      text: 'ロキ\n20歳\n建設業\n技能実習生\n横浜',
      color: '#00f'
    }
  ]);
  const carouselItems = [
    ...content1.map((image, index) => ({
      type: 'card',
      src: image.src,
      text: image.text,
      key: `card-${index}`,
    })),
    {
      type: 'image',
      src: '/home/indimage.png',
      key: 'img1',
    },
    {
      type: 'image',
      src: '/home/indimage2.png',
      key: 'img2',
    },
  ];


  useEffect(() => {
    // 设置定时器来改变显示的内容
    const timer = setInterval(() => {
      setPhase(prevPhase => prevPhase==2 ? 0 : (prevPhase + 1) % 4); // 循环4个阶段：初始，第一段，第二段，第三段
    }, 3000); // 每3秒切换一次

    return () => clearInterval(timer); // 清除定时器
  }, []);

  useEffect(() => { 
    console.log(phase,"phase");
    
  }, [phase]);


 
  const [content2, setContent2] = useState([
    {
      title: '受入企業',
      content: '300+',
    },
    {
      title: '就職者 登録人数',
      content: '10K+',
    },
    {
      title: '利用者',
      content: '2K+',
    },
    {
      title: '求人募集中',
      content: '300+',
    }
  ]);
  const [newsItems, setNewsItems] = useState([
    {
      category: '制度に関する最新情報',
      date: '2025年07月15日',
      title: '【特定技能】特定技能関係の特定活動（「特定技能２号」への移行を希望する場合）',
      color: '#1890ff',
    },
    {
      category: '制度に関する最新情報',
      date: '2025年07月15日',
      title: '【特定技能】特定技能関係の特定活動（「特定技能２号」への移行を希望する場合）',
      color: '#faad14',
    },
    {
      category: '制度に関する最新情報',
      date: '2025年07月15日',
      title: '【特定技能】特定技能関係の特定活動（「特定技能２号」への移行を希望する場合）',
      color: '#ff4d4f',
    },
    {
      category: '制度に関する最新情報',
      date: '2025年07月15日',
      title: '【特定技能】特定技能関係の特定活動（「特定技能２号」への移行を希望する場合）',
      color: '#1890ff',
    },
  ]);

  const [services, setServices] = useState([
    {
      image: '/home/introduce.png',
      title: '特定技能人材紹介',
    },
    {
      image: '/home/introduce.png',
      title: '高度人材紹介',
    },
    {
      image: '/home/introduce.png',
      title: '技能実習生受入支援',
    },
    {
      image: '/home/introduce.png',
      title: '留学生受入支援',
    },
  ]
  );
  const [achievements, setAchievements] = useState([
    {
      image: '/home/solve.png',
      industryText: '業界・業種',
      industry: 'バイク製造の大手企業',
      departmentText: '部門・職種',
      department: ' バイク製造工程における溶接・組立',
      employeesText: '従業員数',
      employees: ' 1,000名以上',
    },
    {
      image: '/home/solve.png',
      industryText: '業界・業種',
      industry: 'バイク製造の大手企業',
      departmentText: '部門・職種',
      department: 'バイク製造工程における溶接・組立',
      employeesText: '従業員数',
      employees: '1,000名以上',
    },
    {
      image: '/home/solve.png',
      industryText: '業界・業種',
      industry: 'バイク製造の大手企業',
      departmentText: '部門・職種',
      department: 'バイク製造工程における溶接・組立',
      employeesText: '従業員数',
      employees: '1,000名以上',
    },
  ]);

  const [points, setPoints] = useState([
    '日本在住歴、勤務歴あり外国人材',
    '採用~採用後も安心のサポート',
    'インターンからの特定技能採用',
    '留学生派遣からの特定技能採用',
    'オーダーメイド人材の採用',
    '安心のコンプライアンス',
  ]);

  const [reasons, setReasons] = useState([
    {
      number: 1,
      title: '最適人材を紹介',
      description: '強固な外国人求職者ネットワーク&求人媒体を駆使した採用で円滑なご紹介が可能',
    },
    {
      number: 2,
      title: 'フォローアップ',
      description: '住居のフォローなど直接雇用でありながら、採用から雇用後も一貫してフォローアップが可能です報告書のレポート作成もお任せください',
    },
    {
      number: 3,
      title: '外国からの特定技能',
      description: '若くて優秀なベトナム籍の大学生を最長1年採用し、期間中に特定技能試験を勉強',
    },
    {
      number: 4,
      title: '留学生からの特定技能',
      description: '留学生の期間はお試しとして派遣で活用しつつ、その期間で見極めを行うことが可能',
    },
    {
      number: 5,
      title: '当社の人材は「質」が違う！',
      description: '海外からの紹介人材なら「完全オーダーメイド」の事前教育プログラムを提供。専門用語などを事前に覚えてから入国するため、現場での即活躍が期待できます。',
    },
  ]);

  const [reasons2, setReasons2] = useState([
    {
      title: '信頼と実績',
      description: '日・バングラ間の豊富な実績で安心のサポートを提供。',
    },
    {
      title: '超迅速な人材供給力',
      description: '急なニーズにも即対応。スピードと精度で人材をご紹介。',
    },
    {
      title: '外国人材の導入安心支援',
      description: '専任チームが生産性向上を支援。現場管理や教育を徹底し、安定した人材運用を実現します。',
    },
    {
      title: '辞めない若手を確保できる',
      description: '外国籍の学生の受け入れを支援。採用から定着まで丁寧にサポートします。',
    },
    {
      title: '安全第一、未来への責任',
      description: '「安全第一」を掲げ、現場のリスク管理を徹底し、すべてのスタッフが安心して働ける環境を提供します。',
    },
    {
      title: '的確なマッチング',
      description: '求めるスキル・人物像に合致した候補者を厳選。',
    },]);

  const [industries, setIndustries] = useState([
    {
      title: '建設業',
      description: '建設現場で即戦力となる外国人労働者を、迅速かつ簡単に、相場の約半分の価格で採用できます。',
      image: '/home/industries.png',
    },
    {
      title: '長野相談室',
      description: 'ご自宅からでも相続の無料相談が可能です。ぜひご利用ください。',
      image: '/home/industries.png',
    },
    {
      title: '長野相談室',
      description: 'ご自宅からでも相続の無料相談が可能です。ぜひご利用ください。',
      image: '/home/industries.png',
    },
  ]);

  const [blogPosts, setBlogPosts] = useState([
    {
      title: '日本での生活：バングラデシュ人労働者の一日',
      description: '早朝の通勤から、清潔で効率的な職場、そして日本食を楽しみながら穏やかな夜を過ごすまで、このブログは、規律正しく、...',
      tag: 'ライフスタイル',
      image: '/home/blogPosts.png',
    },
    {
      title: '日本での生活：バングラデシュ人労働者の一日',
      description: '早朝の通勤から、清潔で効率的な職場、そして日本食を楽しみながら穏やかな夜を過ごすまで、このブログは、規律正しく、...',
      tag: 'ライフスタイル',
      image: '/home/blogPosts.png',
    },
    {
      title: '日本での生活：バングラデシュ人労働者の一日',
      description: '早朝の通勤から、清潔で効率的な職場、そして日本食を楽しみながら穏やかな夜を過ごすまで、このブログは、規律正しく、...',
      tag: 'ライフスタイル',
      image: '/home/blogPosts.png',
    },
  ]);



  const [faqItems, setFaqItems] = useState([
    {
      question: 'どうやって人材不足を解決するの？',
      id: 'faq1',
    },
    {
      question: '契約期間はきまっていますか？',
      id: 'faq2',
    },
    {
      question: '依頼からどのくらいで紹介してもらえるの？',
      id: 'faq3',
    },
    {
      question: '1名あたりの相場はどのくらいですか？',
      id: 'faq4',
    },
    {
      question: '外国籍スタッフは時間制限なく働けるの？',
      id: 'faq5',
    },
    {
      question: '就業後、なにかサポートやフォローはある？',
      id: 'faq6',
    },
  ]);

  return (
    <div
      className='Home_page'
    // className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
    >
      {/* <Seminar /> */}
      <Header />
  
          

      <div className="Home_page_content1"
      >
       <Row gutter={[16, 16]}>
         {(phase === 0) && content1.map((image, index) => (
          <Col key={index} span={6} className="fadeInOut">
            <div className="custom-card" >
              <div className="card-content">
                <img src={image.src} alt={`Person ${index + 1}`} className="card-image" />
                <div className="card-text" style={{ color: "#ffff" }}>
                  {image.text.split('\n').map((line, idx) => (
                    <span key={idx}>{line}<br /></span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        ))}
      {phase === 1 && 
        <Col span={24} className="fadeInOut">
          <img width={1240} src='/home/indimage.png' className="card-image"  />
        </Col>}
      {phase === 2 &&
        <Col span={24} className="fadeInOut" style={{padding: '10px'}}>
          <img  src='/home/indimage2.png'  className="card-image" style={{height: '478px', width: '1240px'}}  />
        </Col>
       } 
     {/* {content1.map((image, index) => (
          <Col key={index} span={6}>
            <div className="custom-card" >
              <div className="card-content">
                <img src={image.src} alt={`Person ${index + 1}`} className="card-image" />
                <div className="card-text" style={{ color: "#ffff" }}>
                  {image.text.split('\n').map((line, idx) => (
                    <span key={idx}>{line}<br /></span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        ))}
        <Col span={24}> 
          <img src='/home/indimage.png'  className="card-image" style={{ height:'auto' }} />
        </Col>
        <Col span={24}> 
          <img src='/home/indimage2.png'  className="card-image" />
        </Col> */}
        
      </Row>
      </div>
      <div className="Home_page_content2">
        <div className="Home_page_content2_context"  >
          {
            content2.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: 'inline-block',
                    width: '400px',
                    margin: '15px',
                    background: "#FFFFFF",
                    padding: '25px',
                    textAlign: 'center',

                  }}>
                  <Space align="center">
                    <Typography.Title level={4}
                      style={{
                        weigth: 1200,
                        fontWeight: "bold",
                        color: '#EE6629',
                        fontSize: '35px',
                        fontStyle: 'Display ExtraBold',
                        marginTop: 10
                      }}
                    >{item.content}</Typography.Title>
                    <span >
                      {item.title}
                    </span>
                  </Space>
                </div>
              )
            })
          }

        </div>
      </div>
      {/* ニュースと最新情報 */}
      <div
        className="Home_page_content3"
      >
        <Typography.Title level={2} >ニュースと最新情報</Typography.Title>
        <List
        className="Home_page_content3_list"

          itemLayout="horizontal"
          dataSource={newsItems}
          renderItem={(item, index) => (
            <List.Item key={index}  >
              <div style={{ display: 'flex', alignItems: 'center', }}>
                <Text style={{ backgroundColor: item.color, padding: '5px 10px', color: 'white', marginRight: '10px' }}>{item.category}</Text>
                <Text style={{ color: '#09658B' }}>{item.date}</Text>
                <Text style={{ marginLeft: '10px', color: '#09658B' }} type="secondary">{item.title}</Text>
              </div>
            </List.Item>
          )}
        />
        <Button type="primary" shape="round" style={{ background: "#EE6629" }} >お知らせ一覧 &gt;</Button>
      </div>
      {/* サービス紹介 */}
      <div
        className="Home_page_content4"
      >
        <Title level={2} >サービス紹介</Title>
        <Text>各サービスの特長や解決方法、人材紹介開始までの詳細を各サービスごとにご紹介いたします。</Text>
        <Row justify="center" >
          {services.map((service, index) => (
            <Col span={5} key={index} >
              <Image
                width={250}
                style={{
                  borderRadius: "8px",
                  marginBottom: "10px",
                  // width: "250px",
                }}
                preview={false} src={service.image} alt={service.title} />
              <Text
                className="Home_page_content4_Itemtitle"
              >{service.title}</Text>
            </Col>
          ))}
        </Row>
        <Button type="primary" shape="round" style={{ background: "#EE6629" }}>サービス詳細一覧をみる &gt;</Button>
      </div>


      <div
        className="Home_page_content5"
      >
        <Title level={2}
        //  className={styles.title}
        >解決してきた実績があります</Title>
        <Text
          //  className={styles.description}
          style={{
            width: "50%",
            display: 'inline-block',
          }}
        >
          現在の日本の製造業には外国籍人材の活用は欠かせないものとなっております。当社では、60カ国以上の多様
          なグローバル人材の派遣が可能です。長期での派遣を可能にするため、万全なサポート体制を準備しています。
        </Text>
        <div
          className="Home_page_content5_achievements"
        >
          {/* <Carousel autoplay className={styles.carousel}> */}

          <Row gutter={[16, 16]}>
            {achievements.map((achievement, index) => (<Col
              className="Home_page_content5_achievements_ItemCol"
              span={8} key={index}>
              <Image width={335}
                preview={false}
                src={achievement.image}
                alt="Achievement"
              //  className={styles.achievementImage}
              />

              <Text style={{
                display: 'block',
              }}
              // className={styles.achievementText}
              >
                <span style={{
                  fontWeight: 700,
                  color: '#1AA4DD',
                  marginRight: "10px",
                }}>{achievement.industryText}</span>
                {achievement.industry}
              </Text>
              <Text
                style={{
                  display: 'block',
                }}
              // className={styles.achievementText}
              >
                <span style={{
                  fontWeight: 700,
                  color: '#1AA4DD',
                  marginRight: "10px",
                }}>{achievement.departmentText}</span>
                {achievement.department}</Text>
              <Text
                style={{
                  display: 'block',
                }}
              // className={styles.achievementText}
              >
                <span style={{
                  fontWeight: 700,
                  color: '#1AA4DD',
                  marginRight: "10px",
                }}>{achievement.employeesText}</span>
                {achievement.employees}</Text>
            </Col>
            ))}
          </Row>

          {/* </Carousel> */}
          <Button type="primary" shape="round" style={{ background: "#EE6629" }}>サービス一覧をみる &gt;</Button>
        </div>


        <Title level={2}
        //  className={styles.title}
        >ご利用企業様例</Title>
        <Image preview={false} src="/home/logo.png" alt="Achievements" />
        <div
          className="Home_page_row2"
        >
          <Row
            gutter={[16, 16]}
          // className={styles.pointsRow}
          >
            <Col span={8}>
              <Image
                width={335}
                preview={false}
                src="/home/pointsRow.png"
                alt="Points"
              //  className={styles.pointsImage}
              />
            </Col>
            <Col span={16}  >
              <Row
                justify="left"
                style={{
                  textAlign: 'left',
                  alignItems: 'left',
                  marginLeft: '80px',
                }}
              >
                <Col
                  style={{
                    weight: 700,
                    fontSize: 100,
                    color: "#EE6629",
                    marginRight: "10px",
                    fontStyle: "bold",
                  }}
                >
                  6
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: 30,
                    }}
                    level={1}
                  //  className={styles.pointsTitle}
                  >
                    特定技能&外国人材</span>
                  <Title level={1}
                    style={{
                      margin: '0 10px',
                      fontSize: 45,
                    }}
                  >
                    つのポイント
                  </Title>
                </Col>
              </Row>
              {/* <Title level={4} className={styles.pointsTitle}>
            <div>6</div> 特定技能&外国人材のポイント</Title> */}
              <ul
                style={{
                  textAlign: 'left',
                  paddingLeft: '100px',
                  listStyle:'none'
                }}
              // className={styles.pointsList}
              >
                {points.map((point, index) => (
                  <li key={index}
                  // className={styles.pointsItem}
                  >

                    <Title level={5}>
                      <span
                        style={{
                          background: "#EE6629",
                          color: "white",
                          with: "25px",
                          marginRight: "10px",
                        }}
                      // className={styles.checkmark}
                      >✓</span>
                      {point}</Title>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
      </div>

      <div className="Home_page_content6"
      >
        <Row justify="center">
          <Col>
            <h1 className='supportTitle'>
              Support
            </h1>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={12} className='imageContainer'>
            <img src="/home/content6Img1.png" alt="Team 1" className='teamImage' />
          </Col>
          <Col span={12} className='imageContainer'>
            <img style={{
              borderRadius: "0 0 80px 0 ",
            }}
              src="/home/content6Img2.png" alt="Team 2" className='teamImage' />
          </Col>
        </Row>

      </div>
      <div className="Home_page_content7">
        {/* <Row> */}
        {/* <Col span={18}> */}
        <Title level={3} style={{ textAlign: 'center' }}>
          それが当社の
        </Title>
        <div
          className="Home_page_content7_reasonTitle2"
          style={{ color: '#1AA4DD', textAlign: 'center' }}>
          「特定技能&外国人材」
        </div>
        <Text style={{ textAlign: 'center', fontSize: '29px' }}>当社の特定技能が選ばれる5つの理由とは・・・?</Text>
        <List
          className="Home_page_content7_reasonList"
          itemLayout="horizontal"
          dataSource={reasons}
          renderItem={(item, index) => (
            <List.Item
              style={{
                border: "none",
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className='Home_page_content7_reasonNumber' >
                  {index + 1}
                </div>
                <div  >
                  <Title level={1}
                    className="Home_page_content7_reasonList_title"
                  >{item.title}</Title>
                  <Text
                    className="Home_page_content7_reasonList_description"
                  >{item.description}</Text>
                </div>
              </div>
            </List.Item>
          )}
        />
        <div style={{ textAlign: 'center' }}>
          <Button style={{ background: "#EE6629" }} type="primary" shape="round" size="large" >
            営業担当に聞いてみる
          </Button>
        </div>
        {/* </Col> */}
        {/* <Col span={24}> */}
        <img src="/home/personImage.png" alt="Person" className='Home_page_content7_personImage' />
        {/* </Col> */}
        {/* </Row> */}

      </div>
      <div className="Home_page_content8">
        <Row justify="center" align="middle">
          <Col span={6}>
            <Text>当社ジャパンバングラブリッジの特長</Text>
            <div className="Home_page_content8_title2">
              リピートいただく
            </div>
            <div className="Home_page_content8_6ReasonTag">
              6つの理由
            </div>
          </Col>
          <Col span={12}>
            <Text style={{ display: 'block', textAlign: 'left' }}>私たちは単なる人材紹介会社ではありません。日本での成功した生活を築くための信頼できるパートナーです。</Text>
            <Text style={{ display: 'block', textAlign: 'left' }}>
              実績あるサポート体制、個別対応、そして確かな解決力で、JBBCはあなたの「日本での夢」
              を現実にする場所です。
            </Text>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={8}>
            {reasons2.map((item, index) => (
              <div key={index} className='Home_page_content8_reasonItem'>
                <div className='Home_page_content8_reasonTag'>
                  Reason {String(index + 1).padStart(2, '0')}
                </div>
                <Title className="Home_page_content8_title3" level={4}>{item.title}</Title>
                <Text className="Home_page_content8_description">{item.description}</Text>
              </div>
            ))}
          </Col>
          <Col span={10}>
            <div className='whiteTitle'>Reason</div>
            <img src="/home/Home_page_content8_personImage.png" alt="Person" className='Home_page_content8_personImage' />
          </Col>
        </Row>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button style={{ background: "#EE6629" }} type="primary" shape="round" size="large" >
            6つ理由の詳細一覧を見る →
          </Button>
        </div>
      </div>

      <div className="Home_page_content9">
        <div className="Home_page_content9_div">
          <Row gutter={[16, 16]}>
            <Col span={8} style={{ padding: '20px' }}>
              <Text>業種から</Text>
              <Title level={3} style={{ color: '#1AA4DD', margin: '0', textAlign: 'left' }}>活用方法を知る</Title>
              <Text>
                当社は、技能実習生・特定技能人材高度人材の採用を希望する企業と求職者を直接結ぶ、日本最大級の採用プラットフォームを運営しております。
              </Text>
              <div className='Home_page_content9_arrowButtons'>
                <Button className="Home_page_content9_arrowButton" shape="circle" icon={<LeftOutlined />} />
                <Button className="Home_page_content9_arrowButton" shape="circle" icon={<RightOutlined />} />
              </div>
            </Col>
            <Col span={16}>
              <Row gutter={[16, 16]}>
                {industries.map((industry, index) => (
                  <Col key={index} span={8}>
                    <Card
                      className='Home_page_content9_card'
                      cover={<img alt="example" src={industry.image} />}
                      style={{ borderRadius: '8px' }}
                    >
                      <div
                        style={{
                          background: '#1AA4DD',
                          color: 'white',
                          padding: '10px',
                          textAlign: 'center',
                          fontSize: '18px',
                          fontWeight: 700,
                        }}
                      >
                        {industry.title}
                      </div>
                      <div style={{
                        background: '#eef7fb',
                        padding: '10px',
                      }}>
                        <Text>
                          {industry.description}
                        </Text>
                      </div>
                      {/* <Card.Meta
                      title={<div className="Home_page_content9_card_title" level={4}>{industry.title}</div>}
                      description={<Text>{industry.description}</Text>}
                    /> */}
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
        {/* <hr className={styles.divider} /> */}

        <Row justify="center" style={{
          marginBottom: "20px",
        }}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Text level={3}>各種ブログ</Text>
            <Title style={{ margin: '0' }} level={3}>外国人人材なら当社へお任せ</Title>
            <Title level={3} style={{ color: '#1AA4DD', margin: '0' }}>高度人材・特定技能人材ジャーナル</Title>
            <Text>
              人材派遣に関連する最新情報やトレンドを発信する「派遣ジャーナル」。人材派遣に関心のある方々に有益な情報を公開しています。
            </Text>
          </Col>
        </Row>



      </div>
      <div className="Home_page_content10" >
        <Row >
          <Col span={24} style={{ textAlign: 'center' }}>
            {/* <Carousel autoplay> */}
            <div style={{ display: 'inline-block' }}>
              <Button className="Home_page_content10_arrowButton" shape="circle" icon={<LeftOutlined />} />

            </div>

            {blogPosts.map((post, index) => (
              <Card
                key={index}
                cover={<img className='Home_page_content10_blogImage' alt="example" src={post.image} />}
                className='Home_page_content10_blogPost'>
                <div className='Home_page_content10_blogContent'>
                  <Text className='Home_page_content10_blogTag' type="secondary">{post.tag}</Text>
                  <Title style={{ margin: '0' }} level={4}>{post.title}</Title>
                  <Text>{post.description}</Text>
                  <div style={{ color: '#1AA4DD', textAlign: 'right' }}>
                    <Button type="link" >続きを読む</Button>
                  </div>
                </div>
              </Card>
            ))}
            <div style={{ display: 'inline-block', }}>
              <Button className="Home_page_content10_arrowButton" shape="circle" icon={<RightOutlined />} />
            </div>


            {/* </Carousel> */}
          </Col>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Button type="primary" shape="round" size="large" style={{ background: "#EE6629" }}>
              記事一覧を見る →
            </Button>
          </Col>
        </Row>
      </div>
      <div className="Home_page_content11">
        {/* Company Section */}
        <div className="Home_page_content11-companySection">
          <Button type="primary" shape="round" size="large" style={{ background: "#EE6629" }}>
            当社について
          </Button>
          <Title level={2}>会社情報</Title>
          <Text
            style={{
              display: "inline-block",
              width: "700px",
              textAlign: 'left'
            }}
          >
            ジャパンバングラブリッジ株式会社は、製造事業に特化した人材総合サービス会社です。
            日本は「モノづくり」の国として、日本の経済を支えてきた製造業、そんな「モノづくり」の現場と、すべてのはたらく人たちを繋ぐことが私たちの使命です。
          </Text>
        </div>

        {/* Compliance Section */}
        <Row justify='center' className="Home_page_content11-complianceSection">
          <Col span={10}>
            <Image src="/home/homeImg.png"
              preview={false}
              className="Home_page_content11-buildingImage" />
          </Col>
          <Col span={12} style={{ marginLeft: "20px", padding: 65 }}>
            <Title level={1}>コンプライアンスへの取り組み</Title>
            <Text style={{
              marginBottom: '30px',
              display: "inline-block",
            }}>
              ジャパンバングラブリッジでは、労働関連法規ならびに当社事業に関わるすべての法令を遵守し、正常な商慣習と社会倫理に適合した企業活動に努めています。
            </Text>
            <Button shape="round" size="large" className="Home_page_content11-button">
              詳細はこちら →
            </Button>
          </Col>
        </Row>

        {/* Client Examples Section */}
        <div className="Home_page_content11-clientExamplesSection">
          <Title level={3} style={{ textAlign: 'center' }}>ご利用企業様例</Title>
          <img src="/home/logo.png" className="Home_page_content11-clientLogos" />
        </div>

        {/* Problems Section */}
        <div className="Home_page_content11-problemsSection">
          <div
            className="whiteTitle"
          >
            Problems
          </div>
          <div className="Home_page_content11_Card">
            <Button
              className="Home_page_content11_TitleBtn"
              level={3} >よくある質問</Button>
            <Row gutter={[16, 16]}
            >
              <Col span={12} style={{ padding: '0 40px' }}>
                <Title level={1}>現場の悩み・経営課題をお聞かせください</Title>
                <Text style={{ padding: "20px 0", display: "inline-block", }}>
                  人材不足から業務効率化まで、今抱えている課題を一緒に解決しませんか？
                  まずは「よくあるご質問」をご覧ください。解決の糸口をご紹介します。
                </Text>
                <Button

                  type="primary" shape="round" size="large" className="Home_page_content11-button">
                  質問の答えを見る<RightOutlined />
                </Button>
              </Col>
              <Col span={12} style={{
                top: '-29px'
              }}>
                <ul className="Home_page_content11-faqList">
                  {faqItems.map((item, index) => (
                    <li key={index} className="Home_page_content11-faqItem">
                      <div className="Home_page_content11-faqIcon">?</div>
                      <span href={`#${item.id}`}>{item.question}</span>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>

          </div>

        </div>
      </div>
      <div className="Home_page_content12">
        {/* Banner Section */}
        <div className="Home_page_content12-banner">
          <img src="/home/computerIcon.png" />
          <div className="Home_page_content12-banner-text">
            <Text style={{ color: '#ffff' }}>Features</Text>
            <Title level={3} style={{ color: '#ffff' }}>ジャパンバングラブリッジで特定技能人材を素早く、簡単に採用しませんか？</Title>
          </div>
          <div className="Home_page_content12-banner-buttons">
            <Button className="Home_page_content11-button" shape="round" size="large">資料ダウンロード</Button>
            <Button className="Home_page_content11-button" shape="round" size="large">お問い合わせ</Button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="Home_page_content12-newsletter">
          <div className="Home_page_content12-newsletter-content">
            <div className="Home_page_content12-newsletter-text">
              <Title level={1}><span style={{ color: "#1AA4DD" }}>JBBC</span>の最新情報を常にご確認ください</Title>
            </div>
            <div className="Home_page_content12-newsletter-form">
              <Search
                placeholder="メールアドレスを入力してください"
                allowClear
                enterButton="送信"
                size="large"
              // onSearch={onSearch}
              />
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="Home_page_content12-footer">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Image
                style={{
                  width: 100,
                }}
                src="/home/jbbcIcon.png" />
              <p><span
                style={{
                  fontWeight: 700
                }}
              >Japan Bangla Bridge Company（JBBC）</span>は、特にバングラデシュをはじめとする海外の優秀な人材を日本でのキャリア機会に結びつけることに特化した、信頼される採用・企業です。</p>
              <div className="Home_page_content12-social-icons">
                <span ><img src="/home/facebook.png" /></span>
                <span ><img  src="/home/play.png" /></span>
                <span ><img src="/home/in.png" /></span>
                <span ><img src='/home/instagram.png' /></span>
              </div>
            </Col>
            <Col span={5} style={{ padding: '0 40px' }}>
              <h3>サービス</h3>
              <ul >
                <li><span >特定技能</span></li>
                <li><span >高度人材</span></li>
                <li><span >技能実習生</span></li>
                <li><span >その他</span></li>
              </ul>
            </Col>
            <Col span={5} style={{ padding: '0 40px' }}>
              <h3>当社について</h3>
              <ul>
                <li><span >導入実績</span></li>
                <li><span >セミナー</span></li>
                <li><span >お役立ち資料</span></li>
                <li><span >会社情報</span></li>
                <li><span >採用情報</span></li>
              </ul>
            </Col>
            <Col span={5} style={{ padding: '0 40px' }}>
              <h3>もっと</h3>
              <ul>
                <li><span >FAQ</span></li>
                <li><span >プライバシーポリシー</span></li>
              </ul>
            </Col>
          </Row>

        </div>
        <div className="Home_page_content12-copyright">
          Copyright © 2010-2025 Japan Bangla Bridge Corporation Ltd. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
