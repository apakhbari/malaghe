import Lottie from 'react-lottie-player'
import lottieJson from './my-lottie.json'

function LottieHandler(lottieFileName) {
  const [animationData, setAnimationData] = useState()

  useEffect(() => {
    import('./${lottieFileName}.json').then(setAnimationData)
  }, [])

  if (!animationData) return <div>Loading...</div>
  return <Lottie loop animationData={animationData} play />
}

export default LottieHandler
