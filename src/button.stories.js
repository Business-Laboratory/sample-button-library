import React from 'react'
import { Main, Button } from './'

export default { title: 'My Button' }

export const inMain = () => (
  <Main>
    <Button color="copper" className="col-start-4 col-end-6 h-12">
      Button
    </Button>
  </Main>
)
