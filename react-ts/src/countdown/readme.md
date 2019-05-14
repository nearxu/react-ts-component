
### countdown component

use one:
<Countdown 
  date={date:number|string}
  render = {(props) => <p>{...props}</p>}
/>

use two:
<Countdown 
  date={date:number|string}
  render = {(props) => <p>{...props}</p>}
>
  <p>{...countdown}</p>
</Countdown>
