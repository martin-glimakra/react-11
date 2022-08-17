const Frisör = ({namn, tid, ledig}) => {
    //javascript kod

    console.log(namn, 'är ledig', ledig)

    return (
        <div>
            <p>Frisör:{ namn }</p>
            <p>Tid: {tid}</p>
            { ledig ? 'jag är ledig' : 'jag är inte ledig' }
            { ledig ? <div> jag är ledig</div> : <h1> jag är inte ledig </h1> }

            { ledig ? <div className="grön-bakgrund"> jag är ledig</div> : <h1 className="röd-bakgrund"> jag är inte ledig </h1> }


        </div>
    );
}
 
export default Frisör ;
