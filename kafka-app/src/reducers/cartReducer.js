import Item1 from '../Images/beatsSolo3a.jpg';
import Item2 from '../Images/boseQc1.jpg';
import Item3 from '../Images/beatsStudio3a.jpg';
import Item4 from '../Images/niaX2a.jpg';
import Item5 from '../Images/niaQ1a.jpg';
import Item6 from '../Images/niaQ8a.jpg';
import Item7 from '../Images/t5a.jpg';
import Item8 from '../Images/bluedioTM1.jpg';
import Item9 from '../Images/DT78a.jpg';
import Item10 from '../Images/D18a.jpg';
import Item11 from '../Images/miBand4a.jpg';
import Item12 from '../Images/D13a.jpg';
import Item13 from '../Images/airpods2G1.jpg';
import Item14 from '../Images/galaxyBud1.jpg';
import Item15 from '../Images/airpodsPro1.jpg';
import Item16 from '../Images/powerBeatsPro1.jpg';
import Item17 from '../Images/joyroomProBuds1.jpg';
import Item18 from '../Images/redmiAirdotsMini1.jpg';
import Item19 from '../Images/beatsX1.jpg';
import Item20 from '../Images/s8neckband1.jpg';
import Item21 from '../Images/powerBeats3a.jpg';
import Item22 from '../Images/jbl1.jpg';
import Item23 from '../Images/archeer1.jpg';
import Item24 from '../Images/appleEarpods1.jpg';
import Item25 from '../Images/rm512a.jpg';
import Item26 from '../Images/rm610a.jpg';
import Item27 from '../Images/romossOm10a.jpg';
import Item28 from '../Images/aspor1.jpg';
import Item29 from '../Images/redmiPowerBank10000a.jpg';
import Item30 from '../Images/romossSense9a.jpg';
import Item31 from '../Images/redmiPowerBank20000a.jpg';
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING , UPDATE_STATE_PHONE,UPDATE_STATE_ADDRESS,UPDATE_STATE_NAME,UPDATE_STATE_TOTAL_ITEMS} from '../actions/action-types/cart-actions';

const initState = {
    items: [
        {id:1,title:'BEATS SOLO 3', desc: "Lorem .", price:1650,img:Item1},
        {id:2,title:'BOSE QC 35', desc: "Lorem ", price:1990,img: Item2},
        {id:3,title:'BEATS STUDIO 3', desc: "Lorem  ",price:1550,img: Item3},
        {id:4,title:'NIA X2', desc: "Lorem ", price:1800,img:Item4},
        {id:5,title:'NIA Q1', desc: "Lorem ", price:1860 ,img: Item5},
        {id:6,title:'NIA Q8-851S', desc: "Lorem ",price:1550,img: Item6},
        {id:7,title:'T5 SMART WATCH', desc: "Lorem ", price:3900,img:Item7},
        {id:8,title:'BLUEDIO T-MONITOR', desc: "Lorem ", price:2950,img: Item8},
        {id:9,title:'DT78 SMART WATCH', desc: "Lorem ipsum .",price:4200,img: Item9},
        {id:10,title:'D18 SMART WATCH', desc: "Lorem ipsum ", price:1650,img:Item10},
        {id:11,title:'XIAOMI MI BAND 4 SMART WATCH', desc: "Lorem ipsum ", price:4450 ,img: Item11},
        {id:12,title:'D13 SMART WATCH', desc: "Lorem ipsum ",price:1350,img: Item12},
        {id:13,title:'APPLE AIRPODS 2nd GENERATION', desc: "Lorem .", price:3450,img:Item13},
        {id:14,title:'SAMSUNG GALAXY BUDS', desc: "Lorem ", price:3950,img: Item14},
        {id:15,title:'APPLE AIRPODS PRO', desc: "Lorem  ",price:5450,img: Item15},
        {id:16,title:'POWER BEATS PRO', desc: "Lorem ", price:2850,img:Item16},
        {id:17,title:'JOYROOM JR-T03 PRO EARBUDS', desc: "Lorem ", price:7450 ,img: Item17},
        {id:18,title:'XIAOMI REDMI AIRDOTS MINI', desc: "Lorem ",price:4250,img: Item18},
        {id:19,title:'BEATS-X EARPHONES', desc: "Lorem ", price:1450,img:Item19},
        {id:20,title:'REMAX S8 NECKBAND EARPHONES', desc: "Lorem ", price:3650,img: Item20},
        {id:21,title:'POWER BEATS 3', desc: "Lorem ipsum .",price:1050,img: Item21},
        {id:22,title:'JBL HEADPHONES', desc: "Lorem ipsum ", price:1450,img:Item22},
        {id:23,title:'ARCHEER AH-17', desc: "Lorem ipsum ", price:2450 ,img: Item23},
        {id:24,title:'APPLE EarPods', desc: "Lorem ipsum ",price:610,img: Item24},
        {id:25,title:'REMAX RM-512 HEADPHONES', desc: "Lorem ",price:650,img: Item25},
        {id:26,title:'REMAX RM-610D HEADPHONES', desc: "Lorem ", price:1450,img:Item26},
        {id:27,title:'ROMOSS OM10', desc: "Lorem ", price:2350,img: Item27},
        {id:28,title:'ASPOR POWER BANK', desc: "Lorem ipsum .",price:1650,img: Item28},
        {id:29,title:'XIAOMI REDMI 10000', desc: "Lorem ipsum ", price:2590,img:Item29},
        {id:30,title:'ROMOSS SENSE 9', desc: "Lorem ipsum ", price:3650 ,img: Item30},
        {id:31,title:'XIAOMI REDMI 20000', desc: "Lorem ipsum ",price:3650,img: Item31},
    ],
    addedItems:[],
    total: 0 ,
    customer_name:'',
    customer_address:'',
    customer_phone_number:''

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
  if(action.type === REMOVE_ITEM){
      let itemToRemove= state.addedItems.find(item=> action.id === item.id)
      let new_items = state.addedItems.filter(item=> action.id !== item.id)
      
      //calculating the total
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
      console.log(itemToRemove)
      return{
          ...state,
          addedItems: new_items,
          total: newTotal
      }
  }
  //INSIDE CART COMPONENT
  if(action.type=== ADD_QUANTITY){
      let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            total: newTotal
        }
  }
  if(action.type=== SUB_QUANTITY){  
      let addedItem = state.items.find(item=> item.id === action.id) 
      //if the qt == 0 then it should be removed
      if(addedItem.quantity === 1){
          let new_items = state.addedItems.filter(item=>item.id !== action.id)
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              addedItems: new_items,
              total: newTotal
          }
      }
      else {
          addedItem.quantity -= 1
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              total: newTotal
          }
      }
      
  }

  if(action.type=== ADD_SHIPPING){
        return{
            ...state,
            total: state.total + 0
        }
  }

  if(action.type=== 'SUB_SHIPPING'){
      return{
          ...state,
          total: state.total - 0
      }
}

  if(action.type=== UPDATE_STATE_NAME){
      return{
          ...state,
          customer_name: action.customer_name
        }
    }

    if(action.type=== UPDATE_STATE_ADDRESS){
        return{
            ...state,
            customer_address: action.customer_address
        }
    }

    if(action.type=== UPDATE_STATE_PHONE){
        return{
            ...state,
            customer_phone_number: action.customer_phone_number
        }
    }

    if(action.type=== UPDATE_STATE_TOTAL_ITEMS){
        let new_items = [];
        let newTotal = 0;
        return{
            ...state,
          addedItems: new_items,
          total: newTotal
        }
  }
  
else{
  return state
  }
  
}
export default cartReducer;