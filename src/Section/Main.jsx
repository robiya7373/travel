import Destination from "../Components/Destination"
import MainWorldSection from "../Components/MainWorldSection"
import StorySection from "../Components/StorySection"
import SunnySection from "../Components/SunnySection"
import StarSection from "../Components/StarSection"

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