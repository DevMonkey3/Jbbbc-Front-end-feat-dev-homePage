
'use client';
import { Menu, Image, Card, Space, Row, Col, Input, Typography, List, Carousel, Button } from "antd";

import './page.less';
import { LeftOutlined, RightOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useRouter } from 'next/navigation'; // 引入 useRouter


export default function Header() {
    const { Text, Title } = Typography;
    const [current, setCurrent] = useState('Home');
    const router = useRouter(); // 初始化 useRouter

    const clickMenu = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        if (e.key === 'menu_button1') {
                router.push('/seminar'); 
        }
    };

    const items = [
        {
            label: 'ホーム',
            key: 'Home',
        },
        {
            label: '選ばれる理由',
            key: 'whyChooseUse',
        },
        {
            label: 'サービス紹介',
            key: 'Service',
        }, {
            label: '導入実績',
            key: 'Track_Record',
        }, {
            label: '会社概要',
            key: 'Profile',
        }, {
            label: 'ブログ',
            key: 'Blog',
        }, {
            label: 'お役立ち情報',
            key: 'Information_Related',
        }
    ];



    return (
        <>
            <div
                className="Home_page_topContext"
                style={{
                    margin: '0 20px',
                }}
            >
                <img
                    className="Home_page_jbbcIcon"
                    src="/home/jbbcIcon.png"
                />
                <div
                    style={{ float: "right" }}
                >
                    <Menu
                        className="Home_page_menu"
                        onClick={clickMenu}
                        selectedKeys={current}
                        mode="horizontal"
                        items={items} />
                    <Button
                        size='large'
                        className="Home_page_menu_button1"
                        icon={<Image style={{ width: "20px", }} src="/home/notes.png" />}
                        onClick={()=>clickMenu({ key: 'menu_button1' })}
                    >
                        お問い合わせ
                    </Button>
                    <Button
                        size='large'
                        className="Home_page_menu_button2"
                        icon={<MenuOutlined />}
                    >
                    </Button>
                </div>
            </div>
        </>
    );
}