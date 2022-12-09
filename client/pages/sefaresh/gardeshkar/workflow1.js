import CardComponent from '../../../components/layout/card'
import FooterNotMain from '../../../components/layout/footernotmain'
import Navbar from '../../../components/layout/navbar/navbar'
import Workflow from '../../../components/layout/sefaresh/workflow'

function workflow1() {
  return (
    <div className="h-screen">
      <Navbar />

      <div className="flex flex-col items-center justify-center mx-auto">
        <CardComponent direction={'rtl'}>
          <h3 dir="rtl" className="text-2xl mb-4 ">
            گردش کار
          </h3>

          <ol class="relative border-l border-accent">
            <Workflow />
            <Workflow />
          </ol>
        </CardComponent>
      </div>
      <FooterNotMain />
    </div>
  )
}

export default workflow1
