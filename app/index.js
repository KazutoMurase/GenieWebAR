import * as tf from '@tensorflow/tfjs';

const INPUT_SIZE = 224;

async function ready() {
    const model = await tf.loadModel('weights/model.json');
}

function detect(canvas, model) {
    const image = tf.fromPixels(canvas, 3); // 3-channels (RGB)
    const resized_image = tf.image.resizeBilinear(image, [INPUT_SIZE, INPUT_SIZE]);
    const input_image = resized_image.reshape([1,
                                               INPUT_IMAGE,
                                               INPUT_IMAGE,
                                               3]).cast('float32').div(tf.scalar(255));
    const result = model.predict(input_image);
    result.data().then((detections)=>{
        detections.forEach(function (detection) {
            /// TODO
        });
    });
}

ready();
