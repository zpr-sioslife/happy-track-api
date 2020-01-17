/**
  https://github.com/microsoft/TypeScript/issues/26722#issuecomment-501912653
  https://github.com/nestjs/nest/issues/986
  TS doesn't resolve tsconfig.json paths when building the project.
  we use tsconfig-paths to do the resolving.
  (an alternative is to use Babel  w/ babel-plugin-module-resolver)
  eg:
  import userRouter from '@user-module'
  >becomes
  import userRouter from '../../user-module'
*/
const tsConfig = require('./tsconfig.json')
const tsConfigPaths = require('tsconfig-paths')

let {paths, baseUrl} = tsConfig.compilerOptions

// Either absolute or relative path. If relative it's resolved to current working directory.
baseUrl = './dist'
for (let path in paths) {
  paths[path][0] = paths[path][0]
    .replace('./src', './dist')
    .replace('.ts', '.js')
}

tsConfigPaths.register({baseUrl, paths})
