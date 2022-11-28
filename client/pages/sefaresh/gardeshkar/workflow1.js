import Navbar from '../../../components/layout/navbar/navbar'
import Workflow from '../../../components/layout/sefaresh/workflow'

function workflow1() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center h-screen mx-auto">
        <div
          className="card w-96 bg-neutral shadow-xl drop-shadow-xl px-10 py-4"
          dir="rtl"
        >
          <h3 dir="rtl" className="text-2xl mb-4 ">
            گردش کار
          </h3>

          <ol class="relative border-l border-accent">
            <Workflow />
            <Workflow />
          </ol>
        </div>
      </div>
    </div>
  )
}

export default workflow1
