import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import Login from './views/Login.vue';
import CreateAccount from './views/CreateAccount.vue';
import NavigationMenu from './views/NavigationMenu.vue';
import PersonalGallery from './views/Gallery/PersonalGallery.vue';
import ArmySection from './views/Army/ArmySection.vue';
import ArmyDetail from './views/Army/ArmyDetail.vue';
import LoreSection from './views/Lore/LoreSection.vue';
import AgeOfSigmar from '@/views/Lore/AgeOfSigmar.vue';
import Warhammer40K from '@/views/Lore/Warhammer40K.vue';
import LordOfTheRings from '@/views/Lore/LordOfTheRings.vue';
import BeastsOfChaos from './views/Lore/Factions/BeastsOfChaos.vue';
import BladesOfKhorne from './views/Lore/Factions/BladesOfKhorne.vue';
import CitiesOfSigmar from './views/Lore/Factions/CitiesOfSigmar.vue';
import DaughtersOfKhaine from './views/Lore/Factions/DaughtersOfKhaine.vue';
import DisciplesOfTzeentch from './views/Lore/Factions/DisciplesOfTzeentch.vue';
import FleshEaterCourts from './views/Lore/Factions/FleshEaterCourts.vue';
import Fyreslayers from './views/Lore/Factions/Fyreslayers.vue';
import GloomspiteGitz from './views/Lore/Factions/GloomspiteGitz.vue';
import HedonitesOfSlaanesh from './views/Lore/Factions/HedonitesOfSlaanesh.vue';
import IdonethDeepkin from './views/Lore/Factions/IdonethDeepkin.vue';
import KharadronOverlords from './views/Lore/Factions/KharadronOverlords.vue';
import LuminethRealmLords from './views/Lore/Factions/LuminethRealmLords.vue';
import MaggotkinOfNurgle from './views/Lore/Factions/MaggotkinOfNurgle.vue';
import Nighthaunt from './views/Lore/Factions/Nighthaunt.vue';
import OgorMawtribes from './views/Lore/Factions/OgorMawtribes.vue';
import OrrukWarclans from './views/Lore/Factions/OrrukWarclans.vue';
import OssiarchBonereapers from './views/Lore/Factions/OssiarchBonereapers.vue';
import Seraphon from './views/Lore/Factions/Seraphon.vue';
import SlavesToDarkness from './views/Lore/Factions/SlavesToDarkness.vue';
import SonsOfBehemat from './views/Lore/Factions/SonsOfBehemat.vue';
import SoulblightGravelords from './views/Lore/Factions/SoulblightGravelords.vue';
import StormcastEternals from './views/Lore/Factions/StormcastEternals.vue';
import Sylvaneth from './views/Lore/Factions/Sylvaneth.vue';
import Skaven from './views/Lore/Factions/Skaven.vue';
import AdeptaSororitas from './views/Lore/Factions/AdeptaSororitas.vue';
import AdeptusCustodes from './views/Lore/Factions/AdeptusCustodes.vue';
import AdeptusMechanicus from './views/Lore/Factions/AdeptusMechanicus.vue';
import Aeldari from './views/Lore/Factions/Aeldari.vue';
import AgentsOfTheImperium from './views/Lore/Factions/AgentsOfTheImperium.vue';
import AstraMilitarum from './views/Lore/Factions/AstraMilitarum.vue';
import BlackTemplars from './views/Lore/Factions/BlackTemplars.vue';
import BloodAngels from './views/Lore/Factions/BloodAngels.vue';
import ChaosKnights from './views/Lore/Factions/ChaosKnights.vue';
import GenestealerCults from './views/Lore/Factions/GenestealerCults.vue';
import DarkAngels from './views/Lore/Factions/DarkAngels.vue';
import DeathGuard from './views/Lore/Factions/DeathGuard.vue';
import DeathWatch from './views/Lore/Factions/DeathWatch.vue';
import ChaosDaemons from './views/Lore/Factions/ChaosDaemons.vue';
import Drukhari from './views/Lore/Factions/Drukhari.vue';
import GreyKnights from './views/Lore/Factions/GreyKnights.vue';
import ImperialFists from './views/Lore/Factions/ImperialFists.vue';
import ImperialKnights from './views/Lore/Factions/ImperialKnights.vue';
import IronHands from './views/Lore/Factions/IronHands.vue';
import LeaguesOfVotann from './views/Lore/Factions/LeaguesOfVotann.vue';
import Necrons from './views/Lore/Factions/Necrons.vue';
import Orks from './views/Lore/Factions/Orks.vue';
import RavenGuard from './views/Lore/Factions/RavenGuard.vue';
import Salamanders from './views/Lore/Factions/Salamanders.vue';
import SpaceMarine from './views/Lore/Factions/SpaceMarine.vue';
import ChaosSpaceMarines from './views/Lore/Factions/ChaosSpaceMarines.vue';
import SpaceWolves from './views/Lore/Factions/SpaceWolves.vue';
import TauEmpire from './views/Lore/Factions/TauEmpire.vue';
import ThousandSons from './views/Lore/Factions/ThousandSons.vue';
import Tyranids from './views/Lore/Factions/Tyranids.vue';
import Ultramarines from './views/Lore/Factions/Ultramarines.vue';
import WhiteScars from './views/Lore/Factions/WhiteScars.vue';
import WorldEaters from './views/Lore/Factions/WorldEaters.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/Login', name: 'Login', component: Login },
  { path: '/CreateAccount', name: 'CreateAccount', component: CreateAccount },
  { path: '/navigation-menu', name: 'NavigationMenu', component: NavigationMenu },
  { path: '/personal-gallery', component: PersonalGallery },
  { path: '/ArmySection', name: 'ArmySection', component: ArmySection },
  { path: '/ArmyDetail', name: 'ArmyDetail', component: ArmyDetail, props: route => ({ name: route.query.name })},
  { path: '/LoreSection', name: 'LoreSection', component: LoreSection },
  { path: '/lore/age-of-sigmar', component: AgeOfSigmar },
  { path: '/lore/warhammer40k', component: Warhammer40K },
  { path: '/lore/lord-of-the-rings', component: LordOfTheRings },
  { path: '/lore/factions/Adepta-Sororitas', component: AdeptaSororitas },
  { path: '/lore/factions/Adeptus-Custodes', component: AdeptusCustodes },
  { path: '/lore/factions/Adeptus-Mechanicus', component: AdeptusMechanicus },
  { path: '/lore/factions/Aeldari', component: Aeldari },
  { path: '/lore/factions/Agents-of-the-imperium', component: AgentsOfTheImperium },
  { path: '/lore/factions/Astra-Militarum', component: AstraMilitarum },
  { path: '/lore/factions/Black-Templars', component: BlackTemplars },
  { path: '/lore/factions/Blood-Angels', component: BloodAngels },
  { path: '/lore/factions/Chaos-Knights', component: ChaosKnights },
  { path: '/lore/factions/Genestealer-Cults', component: GenestealerCults },
  { path: '/lore/factions/Dark-Angels', component: DarkAngels },
  { path: '/lore/factions/Death-Guard', component: DeathGuard },
  { path: '/lore/factions/DeathWatch', component: DeathWatch },
  { path: '/lore/factions/Chaos-Daemons', component: ChaosDaemons },
  { path: '/lore/factions/Drukhari', component: Drukhari },
  { path: '/lore/factions/Grey-Knights', component: GreyKnights },
  { path: '/lore/factions/Imperial-Fists', component: ImperialFists },
  { path: '/lore/factions/Imperial-Knights', component: ImperialKnights },
  { path: '/lore/factions/Iron-Hands', component: IronHands },
  { path: '/lore/factions/Leagues-Of-Votann', component: LeaguesOfVotann },
  { path: '/lore/factions/Necrons', component: Necrons },
  { path: '/lore/factions/Orks', component: Orks },
  { path: '/lore/factions/Raven-Guard', component: RavenGuard },
  { path: '/lore/factions/Salamanders', component: Salamanders },
  { path: '/lore/factions/Space-Marine', component: SpaceMarine },
  { path: '/lore/factions/Chaos-Space-Marines', component: ChaosSpaceMarines },
  { path: '/lore/factions/Space-Wolves', component: SpaceWolves },
  { path: '/lore/factions/Tau-Empire', component: TauEmpire },
  { path: '/lore/factions/Thousand-Sons', component: ThousandSons },
  { path: '/lore/factions/Tyranids', component: Tyranids },
  { path: '/lore/factions/Ultramarines', component: Ultramarines },
  { path: '/lore/factions/White-Scars', component: WhiteScars },
  { path: '/lore/factions/World-Eaters', component: WorldEaters },
  { path: '/lore/factions/beasts-of-chaos', component: BeastsOfChaos },
  { path: '/lore/factions/blades-of-khorne', component: BladesOfKhorne },
  { path: '/lore/factions/cities-of-sigmar', component: CitiesOfSigmar },
  { path: '/lore/factions/daughters-of-khaine', component: DaughtersOfKhaine },
  { path: '/lore/factions/disciples-of-tzeentch', component: DisciplesOfTzeentch },
  { path: '/lore/factions/flesh-eater-courts', component: FleshEaterCourts },
  { path: '/lore/factions/fyreslayers', component: Fyreslayers },
  { path: '/lore/factions/gloomspite-gitz', component: GloomspiteGitz },
  { path: '/lore/factions/hedonites-of-slaanesh', component: HedonitesOfSlaanesh },
  { path: '/lore/factions/idoneth-deepkin', component: IdonethDeepkin },
  { path: '/lore/factions/kharadron-overlords', component: KharadronOverlords },
  { path: '/lore/factions/lumineth-realm-lords', component: LuminethRealmLords },
  { path: '/lore/factions/maggotkin-of-nurgle', component: MaggotkinOfNurgle },
  { path: '/lore/factions/nighthaunt', component: Nighthaunt },
  { path: '/lore/factions/ogor-mawtribes', component: OgorMawtribes },
  { path: '/lore/factions/orruk-warclans', component: OrrukWarclans },
  { path: '/lore/factions/ossiarch-bonereapers', component: OssiarchBonereapers },
  { path: '/lore/factions/seraphon', component: Seraphon },
  { path: '/lore/factions/skaven', component: Skaven },
  { path: '/lore/factions/slaves-to-darkness', component: SlavesToDarkness },
  { path: '/lore/factions/sons-of-behemat', component: SonsOfBehemat },
  { path: '/lore/factions/soulblight-gravelords', component: SoulblightGravelords },
  { path: '/lore/factions/stormcast-eternals', component: StormcastEternals },
  { path: '/lore/factions/sylvaneth', component: Sylvaneth },
];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      // Toujours faire défiler vers le haut
      return { top: 0 }
    }
  });
  
  export default router;