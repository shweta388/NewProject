import React, { useEffect,useState } from 'react'
import {ProgressCircle} from '@adobe/react-spectrum'
import {Flex,View} from '@adobe/react-spectrum'

function Refresh() {
  const [refresh,setRefresh]=useState(0);
  useEffect(()=>{
    setTimeout((setRefresh(()=>refresh+1)),900000);
  },[refresh])
  return (
    <div> 
                 <ProgressCircle aria-label="Loading…" isIndeterminate />
 {refresh}
 <Flex direction="column" gap="size-100">
  <View backgroundColor="celery-600" height="size-800" />
  <Flex direction="row" height="size-3000" gap="size-100">
    <View backgroundColor="indigo-600" width="size-2000" />
    <View backgroundColor="seafoam-600" flex />
  </Flex>
  <View backgroundColor="magenta-600" height="size-800" />
</Flex>
    </div>
  )
}

export default Refresh
