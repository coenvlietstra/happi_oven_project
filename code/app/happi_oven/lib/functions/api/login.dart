import 'dart:convert';

import 'package:happi_oven/models/user.dart';
import 'package:http/http.dart' as http;

Future<ApiResponse> loginUser(String username, String password) async {
  const apiUrl = 'http://192.168.0.113:9999/api/v1/login';
  final response = await http.post(
    Uri.parse(apiUrl),
    body: jsonEncode({'username': username, 'password': password}),
    headers: {'Content-Type': 'application/json'},
  );

  if (response.statusCode == 200) {
    final jsonData = jsonDecode(response.body);
    final userData = UserData.fromJson(jsonData);
    return ApiResponse(userData: userData);
  } else if (response.statusCode == 401) {
    final jsonData = jsonDecode(response.body);
    final errorMessage = jsonData['message'];
    return ApiResponse(errorMessage: errorMessage);
  } else {
    // Handle other error cases here
    return ApiResponse(errorMessage: 'An error occurred');
  }
}
