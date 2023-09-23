import TermsComp from '@/components/terms-of-use-comp/TermsComp'
import data from "@/data/TERMS_DATA.json"

const Terms = async () => {

    return (
        <TermsComp data={data} />
    )
}

export default Terms