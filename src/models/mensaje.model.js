import mongoose from 'mongoose';

const mensajeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MensajeModel = mongoose.model('Mensaje', mensajeSchema, 'mensajes');

export default MensajeModel;
