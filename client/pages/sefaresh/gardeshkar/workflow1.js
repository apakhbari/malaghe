import CardComponent from '../../../components/layout/card'
import CardDescriptionComponent from '../../../components/layout/cardDescription'

import FooterNotMain from '../../../components/layout/footernotmain'
import Navbar from '../../../components/layout/navbar/navbar'
import Workflow from '../../../components/layout/sefaresh/workflow'

function workflow1() {
  return (
    <div className=" flex flex-col h-screen items-center justify-center">
      <Navbar />

      <div className="flex flex-col mx-auto">
        <CardDescriptionComponent direction={'rtl'}>
          <h3 dir="rtl" className="text-2xl mb-4 ">
            گردش کار
          </h3>

          <ol class="relative border-l border-accent">
            <Workflow />
            <Workflow />
          </ol>
        </CardDescriptionComponent>
      </div>
      <FooterNotMain />
    </div>
  )
}

export default workflow1
