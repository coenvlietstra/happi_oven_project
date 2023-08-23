class UserData {
  String? token;
  User? user;

  UserData({this.token, this.user});

  UserData.fromJson(Map<String, dynamic> json) {
    token = json['token'];
    user = json['user'] != null ? User.fromJson(json['user']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['token'] = token;
    if (user != null) {
      data['user'] = user!.toJson();
    }
    return data;
  }
}

class User {
  String? username;
  String? email;
  String? phone;
  String? rights;

  User({this.username, this.email, this.phone, this.rights});

  User.fromJson(Map<String, dynamic> json) {
    username = json['username'];
    email = json['email'];
    phone = json['phone'];
    rights = json['rights'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['username'] = username;
    data['email'] = email;
    data['phone'] = phone;
    data['rights'] = rights;
    return data;
  }
}

class ApiResponse {
  final UserData? userData;
  final String? errorMessage;

  ApiResponse({this.userData, this.errorMessage});
}
