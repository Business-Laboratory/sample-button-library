import React from 'react'
import { Main, Button } from './'

export default { title: 'My Button' }

export const inMain = () => (
  <Main>
    <Button className="col-start-4 col-end-6 h-8 bg-orange-300">
      Hello Button
    </Button>
  </Main>
)
