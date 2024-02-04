import { createRouter, createWebHistory} from 'vue-router';
import Home from '../views/HomeView.vue';
import CreateElement from '../views/CreateElementView.vue';
import DataBaseDnD from '../views/DataBaseDnDView.vue';
import CharacterCard from '../views/CharacterCardView.vue';
import OnlineSession from '../views/OnlineSessionView.vue';
import LoginForm from '../views/LoginFormView.vue';
import RegisterForm from '../views/RegisterFormView.vue';

import DataBaseDnDSpell from '../views/DataBase/DataBaseDnDSpellView.vue';
import DataBaseDnDMonster from '../views/DataBase/DataBaseDnDMonsterView.vue';
import DataBaseDnDItem from '../views/DataBase/DataBaseDnDItemView.vue';
import DataBaseDnDRaceView from '../views/dataBase/DataBaseDnDRaceView.vue';
import DataBaseDnDSubrace from '../views/dataBase/DataBaseDnDSubraceView.vue';
import DataBaseDnDClass from '../views/dataBase/DataBaseDnDClassView.vue';
import DataBaseDnDSubclass from '../views/dataBase/DataBaseDnDSubclassView.vue';

import DataBaseDnDSpellLiked from '../views/DataBaseLiked/DataBaseDnDLikedSpellView.vue';
import DataBaseDnDMonsterLiked from '../views/DataBaseLiked/DataBaseDnDLikedMonsterView.vue';
import DataBaseDnDItemLiked from '../views/DataBaseLiked/DataBaseDnDLikedItemView.vue';
import DataBaseDnDRaceViewLiked from '../views/dataBaseLiked/DataBaseDnDLikedRaceView.vue';
import DataBaseDnDSubraceLiked from '../views/dataBaseLiked/DataBaseDnDLikedSubraceView.vue';
import DataBaseDnDClassLiked from '../views/dataBaseLiked/DataBaseDnDLikedClassView.vue';
import DataBaseDnDSubclassLiked from '../views/dataBaseLiked/DataBaseDnDLikedSubclassView.vue';

import DataBaseDnDSpellCreated from '../views/DataBaseCreated/DataBaseDnDCreatedSpellView.vue';
import DataBaseDnDMonsterCreated from '../views/DataBaseCreated/DataBaseDnDCreatedMonsterView.vue';
import DataBaseDnDItemCreated from '../views/DataBaseCreated/DataBaseDnDCreatedItemView.vue';
import DataBaseDnDRaceViewCreated from '../views/dataBaseCreated/DataBaseDnDCreatedRaceView.vue';
import DataBaseDnDSubraceCreated from '../views/dataBaseCreated/DataBaseDnDCreatedSubraceView.vue';
import DataBaseDnDClassCreated from '../views/dataBaseCreated/DataBaseDnDCreatedClassView.vue';
import DataBaseDnDSubclassCreated from '../views/dataBaseCreated/DataBaseDnDCreatedSubclassView.vue';


import BySpellId from '../views/ById/BySpellId.vue';
import ByMonsterId from '../views/ById/ByMonsterId.vue';
import ByItemId from '../views/ById/ByItemId.vue';
import ByRaceId from '../views/ById/ByRaceId.vue';
import BySubraceId from '../views/ById/BySubraceId.vue';
import ByClassId from '../views/ById/ByClassId.vue';
import BySubclassId from '../views/ById/BySubclassId.vue';

import CreateElementSpellView from '../views/CreateElement/CreateElementSpellView.vue';
import CreateElementClassView from '../views/CreateElement/CreateElementClassView.vue';
import CreateElementClassFeatureView from '../views/CreateElement/CreateElementClassFeatureView.vue';
import CreateElementEnemyView from '../views/CreateElement/CreateElementEnemyView.vue';
import CreateElementEnemyActionView from '../views/CreateElement/CreateElementEnemyActionView.vue';
import CreateElementItemView from '../views/CreateElement/CreateElementItemView.vue';
import CreateElementRaceView from '../views/CreateElement/CreateElementRaceView.vue';
import CreateElementRaceFeatureView from '../views/createElement/CreateElementRaceFeatureView.vue';
import CreateElementSubraceView from '../views/CreateElement/CreateElementSubraceView.vue';
import CreateElementSubraceFeatureView from '../views/createElement/CreateElementSubraceFeatureView.vue';

import changePassword from '../views/changePassword.vue';
import changeUsername from '../views/changeUsername.vue';
import CreatedElement from '../views/CreatedElementView.vue';
import LikedElement from '../views/LikedElementView.vue';
import Createcharactersheet from '../views/CharacterSheet/Createcharactersheet.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/TworzenieElementow',
        name: 'createElement',
        component: CreateElement
    },
    {
        path: '/BazaDanychDnD',
        name: 'dataBaseD&D',
        component: DataBaseDnD
    },
    {
        path: '/KartaPostaci',
        name: 'characterCard',
        component: CharacterCard
    },
    {
        path: '/SesjaOnline',
        name: 'onlineSession',
        component: OnlineSession
    },
    {
        path: '/Logowanie',
        name: 'loginForm',
        component: LoginForm
    },
    {
        path: '/Rejestracja',
        name: 'RegisterFormView',
        component:  RegisterForm,
        
    },
    {
        path: '/Czary',
        name: 'DataBaseDnDSpell',
        component: DataBaseDnDSpell
    },
    {
        path: '/Czary/:id',
        name: 'BySpellId',
        component: BySpellId,
        props: true
        
    },
    {
        path: '/Przeciwnicy',
        name: 'DataBaseDnDMonster',
        component: DataBaseDnDMonster
    },
    {
        path: '/Przeciwnicy/:id',
        name: 'ByMonsterId',
        component: ByMonsterId,
        props: true
        
    },
    {
        path: '/Przedmioty',
        name: 'DataBaseDnDItem',
        component: DataBaseDnDItem
    },
    {
        path: '/Przedmioty/:id',
        name: 'ByItemId',
        component: ByItemId,
        props: true
        
    },
    {
        path: '/Rasy',
        name: 'DataBaseDnDRaceView',
        component: DataBaseDnDRaceView
    },
    {
        path: '/Rasy/:id',
        name: 'ByRaceId',
        component: ByRaceId,
        props: true
        
    },
    {
        path: '/Podrasy',
        name: 'DataBaseDnDSubrace',
        component: DataBaseDnDSubrace
    },
    {
        path: '/Podrasy/:id',
        name: 'BySubraceId',
        component: BySubraceId,
        props: true
        
    },
    {
        path: '/Klasy',
        name: 'DataBaseDnDClass',
        component: DataBaseDnDClass
    },
    {
        path: '/Klasy/:id',
        name: 'ByClassId',
        component: ByClassId,
        props: true
        
    },
    {
        path: '/Podklasy',
        name: 'DataBaseDnDSubclass',
        component: DataBaseDnDSubclass
    },
    {
        path: '/Podklasy/:id',
        name: 'BySubclassId',
        component: BySubclassId,
        props: true
        
    },
    {
        path: '/TworzenieCzaru',
        name: 'CreateElementSpellView',
        component: CreateElementSpellView,
        props: true
        
    },
    {
        path: '/TworzeniePrzeciwnika',
        name: 'CreateElementEnemyView',
        component: CreateElementEnemyView,
        props: true
        
    },
    {
        path: '/TworzenieAkcjiPrzeciwnika',
        name: 'CreateElementEnemyActionView',
        component: CreateElementEnemyActionView,
        props: true
        
    },
    {
        path: '/TworzenieKlasy',
        name: 'CreateElementClassView',
        component: CreateElementClassView,
        props: true
        
    },
    {
        path: '/TworzenieCechyKlasy',
        name: 'CreateElementClassFeatureView',
        component: CreateElementClassFeatureView,
        props: true
        
    },
    {
        path: '/TworzeniePrzedmiotow',
        name: 'CreateElementItemView',
        component: CreateElementItemView,
        props: true
        
    },
    {
        path: '/TworzenieRas',
        name: 'CreateElementRaceView',
        component: CreateElementRaceView,
        props: true
        
    },
    {
        path: '/TworzenieCechyRasy',
        name: 'CreateElementRaceFeatureView',
        component: CreateElementRaceFeatureView,
        props: true
        
    },
    {
        path: '/TworzeniePodras',
        name: 'CreateElementSubraceView',
        component: CreateElementSubraceView,
        props: true
        
    },
    {
        path: '/TworzenieCechyPodras',
        name: 'CreateElementSubraceFeatureView',
        component: CreateElementSubraceFeatureView,
        props: true
        
    },
    {
        path: '/ZmianaHasla',
        name: 'changePassword',
        component: changePassword,
        props: true
        
    },
    {
        path: '/ZmianaNazwy',
        name: 'changeUsername',
        component: changeUsername,
        props: true
        
    },

    {
        path: '/StworzoneElementy',
        name: 'CreatedElement',
        component: CreatedElement,
        props: true
        
    },
    {
        path: '/StworzoneCzary',
        name: 'DataBaseDnDSpellCreated',
        component: DataBaseDnDSpellCreated,
        props: true
        
    },
    {
        path: '/StworzeniPrzeciwnicy',
        name: 'DataBaseDnDMonsterCreated',
        component: DataBaseDnDMonsterCreated,
        props: true
        
    },
    {
        path: '/StworzoneRasy',
        name: 'DataBaseDnDRaceViewCreated',
        component: DataBaseDnDRaceViewCreated,
        props: true
        
    },
    {
        path: '/StworzonePodrasy',
        name: 'DataBaseDnDSubraceCreated',
        component: DataBaseDnDSubraceCreated,
        props: true
        
    },
    {
        path: '/StworzoneKlasy',
        name: 'DataBaseDnDClassCreated',
        component: DataBaseDnDClassCreated,
        props: true
        
    },
    {
        path: '/StworzonePodklasy',
        name: 'DataBaseDnDSubclassCreated',
        component: DataBaseDnDSubclassCreated,
        props: true
        
    },
    {
        path: '/StworzonePrzedmioty',
        name: 'DataBaseDnDItemCreated',
        component: DataBaseDnDItemCreated,
        props: true
        
    },
    
    
    {
        path: '/PolubioneElementy',
        name: 'LikedElement',
        component: LikedElement,
        props: true
        
    },

    {
        path: '/PolubioneCzary',
        name: 'DataBaseDnDSpellLiked',
        component: DataBaseDnDSpellLiked,
        props: true
        
    },
    {
        path: '/PolubieniPrzeciwnicy',
        name: 'DataBaseDnDMonsterLiked',
        component: DataBaseDnDMonsterLiked,
        props: true
        
    },
    {
        path: '/PolubionePrzedmioty',
        name: 'DataBaseDnDItemLiked',
        component: DataBaseDnDItemLiked,
        props: true
        
    },
    {
        path: '/PolubioneRasy',
        name: 'DataBaseDnDRaceViewLiked',
        component: DataBaseDnDRaceViewLiked,
        props: true
        
    },
    {
        path: '/PolubionePodrasy',
        name: 'DataBaseDnDSubraceLiked',
        component: DataBaseDnDSubraceLiked,
        props: true
        
    },
    {
        path: '/PolubioneKlasy',
        name: 'DataBaseDnDClassLiked',
        component: DataBaseDnDClassLiked,
        props: true
        
    },
    {
        path: '/PolubionePodklasy',
        name: 'DataBaseDnDSubclassLiked',
        component: DataBaseDnDSubclassLiked,
        props: true
        
    },
    {
        path: '/Tworzeniekartypostaci',
        name: 'Createcharactersheet',
        component: Createcharactersheet,
        props: true
        
    },
    
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
