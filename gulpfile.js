const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');


function defaultTask(cb){
    console.log('gulp 成功');
    cb();
}

exports.c = defaultTask;

//taskA
function A(cb){
    console.log('a mission');
    cb();
}

//taskB
function B(cb){
    console.log('b mission');
    cb();
}

exports.sync = series(A, B);
exports.async = parallel(A, B);

// 以上使用在最後打包的流程


function file(){
    return src('src/index.html').pipe(dest('dist/'))
}

exports.f = file;