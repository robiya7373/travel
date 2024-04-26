import Destination from "../components/Destination"
import MainWorldSection from "../components/MainWorldSection"
import StorySection from "../components/StorySection"
import SunnySection from "../components/SunnySection"
import StarSection from "../components/StarSection"

const Main = () => {
  return (
    <div>
        <MainWorldSection/>
        <Destination/>
        <SunnySection/>
        <StarSection/>
        <StorySection/>
    </div>
  )
}

export default Main