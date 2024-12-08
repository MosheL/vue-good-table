call npx rollup -c rollup.config.js  || exit /b 666

robocopy  /mir  .\dist   ..\vsif\node_modules\vue-good-table\dist 
rem  robocopy  /mir  .\dist   \\192.168.1.7\e$\vsif\app\node_modules\vue-good-table\dist

pause
