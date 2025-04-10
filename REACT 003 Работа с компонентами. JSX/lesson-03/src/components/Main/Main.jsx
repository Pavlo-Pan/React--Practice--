import ShowCalc from "../ShowCalc/ShowCalc";

import RandomPhrase from "../RandomPhrase/RandomPhrase";
import SectionTitle from "../SectionTitle/SectionTitle";
import Card from "../CardList/Card/Card";
import UserList from "../UserList/UserList";
import CardList from "../CardList/CardList";
import CarList from "../CarList/CarList";
import Section from "../Section/Section";

import { getCurrentDate } from "../../utils/date-functions";

import "./Main.css";

const cardItems = [
    {
        id: 1,
        title: "Lenovo X120S",
        price: 200
    },
    {
        id: 2,
        title: "iPhone XR",
        available: false,
        price: 3500
    },
    {
        id: 3,
        title: "Bosh wachmachine",
        available: true,
        price: 700
    },
    {
        id: 4,
        title: "Apple watch",
        available: true,
        price: 900
    },

    {
        id: 5,
        title: "Apple",
        available: false,
        price: 900
    },
];

const Main = () => {
    return (
        <div>
            <h1>Welcome to site. Today {getCurrentDate()}</h1>

            <Section title="Products">
                <CardList items={cardItems} />
            </Section>

            <div className="section">
                <div className="container">
                    <SectionTitle text="Random Phrase" />
                    <RandomPhrase />
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <SectionTitle text="Section title Calc" />
                    <ShowCalc />
                </div>
            </div>

            <SectionTitle text="Product cards" />
            <CardList items={cardItems} />

            <SectionTitle text="Section title Card" />
            <Card title="Title 1" price="200" />

            <UserList />
            <SectionTitle text="Section title Car list" />
            <CarList />

        </div>
    )
}

export default Main;