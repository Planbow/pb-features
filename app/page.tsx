
import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Buyers from './components/Buyers/index';
import Provide from './components/Provide/index';
import Why from './components/Why/index';
import Network from './components/Network/index';
import Clientsay from './components/Clientsay/index';
import Newsletter from './components/Newsletter/Newsletter';

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        {/* <Companies /> */}
        <Provide />
        <Buyers />
        <Why />
        <Network />
        <Clientsay />
        <Newsletter />
      </main>
      <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/21796752.js"></script>
    </div>
  )
}
