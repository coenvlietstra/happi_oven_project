import 'package:dart_jsonwebtoken/dart_jsonwebtoken.dart';

JWT verifyToken(String token) {
  final jwt = JWT.decode(token);

  return jwt;
}

bool isTokenExpiringSoon(String token) {
  return true;
}
