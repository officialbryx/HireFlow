from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Configure MySQL database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:admin@localhost/hireflow'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the SQLAlchemy object
db = SQLAlchemy(app)

# Example table
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True) 
    name = db.Column(db.String(100))

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    print('pumupunta rito')
    return jsonify([{'id': user.id, 'name': user.name} for user in users])

if __name__ == '__main__':
    # Create tables in the database
    with app.app_context():
        db.create_all()  
    app.run(debug=True)
