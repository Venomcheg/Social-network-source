import { Suspense } from "react"
import Preloader from "../components/common/preloader"

export default function SuspenseHoc(Component) {
  return (props) => {
    return (
      <Suspense fallback={<Preloader />}>
        <Component />
      </Suspense>
    )
  }
}
