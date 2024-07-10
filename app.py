#  Importar las herramientas
# Acceder a las herramientas para crear la app web
from flask import Flask, request, jsonify, render_template

# Para manipular la DB
from flask_sqlalchemy import SQLAlchemy

# Módulo cors es para que me permita acceder desde el frontend al backend
from flask_cors import CORS

# Crear la app
app = Flask(__name__)

# permita acceder desde el frontend al backend
CORS(app)


# Configurar a la app la DB
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://usuario:contraseña@localhost:3306/nombre_de_la_base_de_datos'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://traslados:123Yyz456!@traslados.mysql.pythonanywhere-services.com/traslados$default'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Crear un objeto db, para informar a la app que se trabajará con sqlalchemy
db = SQLAlchemy(app)


# Definir la tabla
class Cliente(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)
    telefono =db.Column(db.String(15), nullable=False)
    email =db.Column(db.String(100), nullable=False)
    password =db.Column(db.String(255), nullable=False)

    def __init__(self,nombre,telefono,email ,password):   #crea el  constructor de la clase
        self.nombre = nombre   # el id lo crea mysql, y se autoincrementa
        self.telefono = telefono
        self.email = email
        self.password = password


# Crear la tabla al ejecutarse la app
with app.app_context():
    db.create_all()

# Crear ruta de acceso, "/" es la ruta de inicio
@app.route("/")
def home():
    return render_template('/tabla_clientes.html')

# Crear un registro en la tabla Clientes
@app.route("/registro", methods=['POST'])
def registro():
    # input tiene el atributo correspondiente
    nombre_recibido = request.json["nombre"]
    telefono=request.json['telefono']
    email=request.json['email']
    password=request.json['password']

    nuevo_registro = Cliente(nombre=nombre_recibido,telefono=telefono,email=email,password=password)
    db.session.add(nuevo_registro)
    db.session.commit()

    return "Solicitud de post recibida"


# Retornar todos los registros en un Json
@app.route("/clientes",  methods=['GET'])
def clientes():
    # Consultar en la tabla todos los registros
    # all_registros -> lista de objetos
    all_registros = Cliente.query.all()

    # Lista de diccionarios
    data_serializada = []

    # itera objeto (cada fila guardada en la db)
    for objeto in all_registros:
        data_serializada.append({"id":objeto.id, "nombre":objeto.nombre, "telefono":objeto.telefono, "email":objeto.email, "password":objeto.password})

    # respuesta: lista de diccionarios a Json
    return jsonify(data_serializada)


# Modificar un registro
@app.route('/update/<id>', methods=['PUT'])
def update(id):
    # Buscar el registro a modificar en la tabla por su id
    cliente = Cliente.query.get(id)

    # {"clave": "valor"} -> input tiene el atributo clave="valor"
    nombre = request.json["nombre"]
    telefono=request.json['telefono']
    email=request.json['email']
    password=request.json['password']

    cliente.nombre=nombre
    cliente.telefono=telefono
    cliente.email=email
    cliente.password=password
    db.session.commit()

    data_serializada = [{"id":cliente.id, "nombre":cliente.nombre, "telefono":cliente.telefono, "email":cliente.email, "password":cliente.password}]

    return jsonify(data_serializada)

# Eliminar un registro
@app.route('/borrar/<id>', methods=['DELETE'])
def borrar(id):

    # Se busca a la productos por id en la DB
    cliente = Cliente.query.get(id)

    # Se elimina de la DB
    db.session.delete(cliente)
    db.session.commit()

    data_serializada = [{"id":cliente.id, "nombre":cliente.nombre, "telefono":cliente.telefono, "email":cliente.email, "password":cliente.password}]

    return jsonify(data_serializada)

# if __name__ == "__main__":
#     app.run(debug=True)
