import React from "react";
import CollectionOverview from "../../components/collections-overview/collections-overview"
import {Route} from "react-router-dom";
import Collection from "../collection/collection";
const Shop= ({match})=>(

 <div className="shop-page">
    <Route exact path = {`${match.path}`} component={<CollectionOverview/>}/>
    <Route path={`${match.path}/:collectionId`} component={Collection}/>
</div>
        )

export default Shop;
