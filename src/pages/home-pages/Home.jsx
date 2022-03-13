import React, {useState, useCallback} from 'react';
import './Home.css';
import { GameItem } from '../../components/game-item/GameItem';
import { Button } from '../../components/button/Button';
//import { LessGameItem } from '../../components/less-game-item/LessGameItem';


const GAMES = [
    {
        image: 'https://github.com/brian7346/game-store/blob/main/public/game-covers/assassins_creed_valhalla.png?raw=true',
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор', 'Открытый мир'],
        price: 20340,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {
        image: 'https://github.com/brian7346/game-store/blob/main/public/game-covers/battlefield_2042.jpg?raw=true',
        title: 'Battlefield 2042',
        genres: ['Экшен', 'Шутер', 'Война'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 24840,
        id: 2,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: 'https://github.com/brian7346/game-store/blob/main/public/game-covers/forza_5.jpeg?raw=true',
        title: 'Life is Strange True Colors',
        genres: ['Глубокий сюжет', 'Протагонистка'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 30000,
        id: 3,
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
    },
    {
        image: 'https://github.com/brian7346/game-store/blob/main/public/game-covers/gta_v.jpeg?raw=true',
        title: 'Grand Theft Auto V',
        genres: ['Открытый мир', 'Экшен'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 7890,
        id: 4,
        description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
    },
    {
        image: 'https://github.com/brian7346/game-store/blob/main/public/game-covers/life_is_strange_true_colors.jpeg?raw=true',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Тактика', 'Шутер'],
        price: 15620,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {
        image: 'https://www.amd.com/system/files/styles/992px/private/2022-01/1209353-GOW-key-art-1260x709.jpg?itok=zn6suzwm',
        title: 'esim e',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 28760,
        id: 6,
        description: 'vala es ova vala — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
    {
        image: 'https://cdn.mos.cms.futurecdn.net/cRFFW6JNXqEtkBA3P2U68m.jpg',
        title: 'PUPG',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 28760,
        id: 7,
        description: 'hi ape — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
    {
        image: 'https://play-lh.googleusercontent.com/NFBZLQ7TdLE-YxYmqJKrIV4g-U5LAR2_VsQw_Miv_IAi9I06MgGVMkHxTIj_wDP_PQ',
        title: 'kriv xaxer',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 28760,
        id: 8,
        description: 'asa tenam incha ele — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
    {
        image: 'https://gamelayer.ru/gameimg/igry-gonki-2.jpg',
        title: 'NEEd for speed',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 28760,
        id: 9,
        description: 'aziz — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },

]

export const Home = () => {

    const [maxRange, setMaxRange] = useState(6); 

    const loadMore = useCallback(() => {
        setMaxRange(prevRange => prevRange + 4);
    },[])

    const cardComponent = GAMES.slice(0, maxRange).map((game, i) => {
        return (
        <GameItem key={i}/>
        );
    });
    

    return (
        <div className='Home'>
            {
                GAMES.map(game => <GameItem game={game} key={game.id} />)
            }
            <div className='LoadMoreItem'>
                <Button>Load More</Button>    
            </div>
        </div>
    )
}
