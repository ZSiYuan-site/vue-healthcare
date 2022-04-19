import Mock from 'mockjs'
import togueData from './togue.json'
import faceData from './face.json'

Mock.mock('/mock/togue', togueData)

Mock.mock('/mock/face', faceData)
