import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTrail, fetchTrails, getTrail, getTrails } from "../../store/trail";
import t1 from '../HomePage/trail1.jpeg';
import t2 from '../HomePage/trail2.jpeg';
import t3 from '../HomePage/trail3.jpeg';
import t4 from '../HomePage/trail4.jpeg';
import t5 from '../HomePage/trail5.jpeg';
import t6 from '../HomePage/trail6.png';
import t7 from '../HomePage/trail7.jpeg';
import t8 from '../HomePage/trail8.webp';
import t9 from '../HomePage/trail9.jpeg';
import t10 from '../HomePage/trail10.jpeg';

const NearbyTrails = ({trailId}) => {
    let currentTrail = trailId; 
    // console.log(trailId);
    const dispatch = useDispatch();
    const trails = useSelector(getTrails);
    // console.log(trails);

    function getRandomArrayElements(arr, count) {
        var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }
    
    const nearbyTrailsArr = getRandomArrayElements(trails, 5) 
    console.log(nearbyTrailsArr);



    const nearbyTrailsList = nearbyTrailsArr.map((trail)=>{
        let nearbyTrail = trail.id; 
        if(nearbyTrail!=currentTrail){
            return(
                <div className='near'>
                                <div id='near-top'>
                                    <Link to={`/trails/${nearbyTrail}`} >
                                        {trail.id == 1 && <img id="near-pic" src={t1}  alt="" />}
                                        {trail.id == 2 && <img id="near-pic" src={t2}  alt="" />}
                                        {trail.id == 3 && <img id="near-pic" src={t3}  alt="" />}
                                        {trail.id == 4 && <img id="near-pic" src={t4}  alt="" />}
                                        {trail.id == 5 && <img id="near-pic" src={t5}  alt="" />}
                                        {trail.id == 6 && <img id="near-pic" src={t6}  alt="" />}
                                        {trail.id == 7 && <img id="near-pic" src={t7}  alt="" />}
                                        {trail.id == 8 && <img id="near-pic" src={t8}  alt="" />}
                                        {trail.id == 9 && <img id="near-pic" src={t9}  alt="" />}
                                        {trail.id == 10 && <img id="near-pic" src={t10}  alt="" />}
                                    </Link>
                                </div>
                            <div id='near-bot'>
                                <div className='near-trail'>
                                    <div id="n-diff">{trail.difficultyLevel}</div>
                                    <div id="n-n">{trail.tName}</div>
                                    <div id="n-lo">USA - New York</div>
                                    <div id="n-leng">Length: {trail.length}</div>
                                </div>
                            </div>
                                </div>
            )
        }
    })

    useEffect (() => {
        dispatch(fetchTrails());
        // dispatch(fetchTrail(trailId));
        // debugger
    }, [dispatch]);


    return(
        <>{nearbyTrailsList}</>
    )

}

export default NearbyTrails; 