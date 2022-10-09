# 개요
- ffi-napi를 이용한 nodejs에서의 Windows DLL 사용 예제
- Windows DLL usage nodejs sample with ffi-napi on Windows OS

# 파일
- /DllTest : .dll 빌드를 위한 프로젝트
- DllTest.dll, DllTest_x64.dll : x32, x64 dlls
- index.js : 에서 dll을 명시적으로 로드하고 사용

# 사용
- npm 32비트 설치
- npm install -g node-gyp
- npm install 
- npm run start

# 참고
- DLL 프로젝트 포함
  - DLL을 직접 빌드하고자 할 시, Visual Studio 2022 기반에서 "DllTest.sln"을 수정 
- node-gyp
  - https://github.com/nodejs/node-gyp
- node-ffi-napi
  - https://github.com/node-ffi-napi/node-ffi-napi
