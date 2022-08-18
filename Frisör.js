const Frisör = ({namn, tid, ledig, bildUrl, språk}) => {

    // console.log('språk', språk)

    let ledigText = 'jag är ledig'
    let inteLedigText = 'jag är inte ledig'

    if (språk === 'engelska') {
        ledigText = 'I am free'
        inteLedigText = 'I am not free'
    }



    return (
        <div>
            <p>Frisör:{ namn }</p>
            <p>Tid: {tid}</p>
            { ledig ? ledigText : inteLedigText }
            {bildUrl ? <img src={bildUrl} alt="exempelbild" width="500" height="600"/> : '' }
            
        </div>
    );
}
 
export default Frisör ;
